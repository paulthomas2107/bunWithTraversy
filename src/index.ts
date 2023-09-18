import fetchUser from './githubAPI';

(async () => {
  const userData = await fetchUser('paulthomas2107');
  document.querySelector('h1').innerHTML = JSON.stringify(userData);
})();
