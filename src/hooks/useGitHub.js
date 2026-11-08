import { useState, useEffect } from 'react';

const USERNAME = 'prajvalrshunty';
const CACHE_KEY_PROFILE = 'github_profile_cache';
const CACHE_KEY_REPOS = 'github_repos_cache';
const CACHE_TTL = 1000 * 60 * 15; // 15 minutes cache

export function useGitHub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      // Check cache first to avoid GitHub API rate limits
      try {
        const cachedProfile = sessionStorage.getItem(CACHE_KEY_PROFILE);
        const cachedRepos = sessionStorage.getItem(CACHE_KEY_REPOS);
        const cachedTime = sessionStorage.getItem('github_cache_time');

        if (cachedProfile && cachedRepos && cachedTime && (Date.now() - Number(cachedTime) < CACHE_TTL)) {
          if (isMounted) {
            setProfile(JSON.parse(cachedProfile));
            setRepos(JSON.parse(cachedRepos));
            setLoading(false);
          }
          return;
        }
      } catch (e) {
        console.warn('Session storage read error', e);
      }

      setLoading(true);
      setError(null);

      try {
        // Fetch public profile and public repos
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`)
        ]);

        if (!profileRes.ok) {
          throw new Error(`GitHub API error: ${profileRes.statusText}`);
        }

        const profileData = await profileRes.json();
        let reposData = [];
        if (reposRes.ok) {
          reposData = await reposRes.json();
        }

        if (isMounted) {
          setProfile(profileData);
          setRepos(Array.isArray(reposData) ? reposData : []);
          setLoading(false);

          try {
            sessionStorage.setItem(CACHE_KEY_PROFILE, JSON.stringify(profileData));
            sessionStorage.setItem(CACHE_KEY_REPOS, JSON.stringify(reposData));
            sessionStorage.setItem('github_cache_time', String(Date.now()));
          } catch (e) {
            console.warn('Session storage write error', e);
          }
        }
      } catch (err) {
        if (isMounted) {
          console.warn('GitHub API fetch failed or rate limited:', err.message);
          setError(err.message);
          // Fallback minimal honest structure without fake stats
          setProfile({
            login: USERNAME,
            html_url: `https://github.com/${USERNAME}`,
            public_repos: null,
            followers: null,
            bio: "Data Science & AI Developer",
            avatar_url: `https://github.com/${USERNAME}.png`
          });
          setRepos([]);
          setLoading(false);
        }
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { profile, repos, loading, error, username: USERNAME };
}
