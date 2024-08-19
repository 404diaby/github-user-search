
import {  initTheme } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {


const form = document.getElementById('search-container');



form.addEventListener('submit', (e) => onSubmit(e));

async function onSubmit(e){ 
    e.preventDefault();
    const input = document.getElementById('github-username');
    const userName = input.value.trim();
   if(!userName){ 
    showError('empty-field');
    return; 
    }
   await fetchUser(userName);
   input.value = '';

}

async function fetchUser(userName) {
    const url = `https://api.github.com/users/${userName}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updateDOM(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        showError('search-error');

    }
}

/**
   * Displays an error message.
   * @param {string} elementId - The ID of the error message element.
   */
function showError(elementId) {
    const searchError = document.getElementById(elementId);
    toggleVisibility(searchError, true);
    setTimeout(() => {
        toggleVisibility(searchError, false);
    }, 3000);
}


  /**
   * Toggles the visibility of an element.
   * @param {HTMLElement} element - The element to toggle.
   * @param {boolean} show - Whether to show or hide the element.
   */
function toggleVisibility(element, show) {
        element.classList.toggle('hidden', !show);
        element.classList.toggle('search-error', show);
}



/**
   * Updates the DOM with the user data.
   * @param {object} data - The user data.
   */
function updateDOM(data){
    const { avatar_url : dataAvatarUlr, login : dataLogin, created_at : dataCreateAt, name : dataName, 
        public_repos : dataPublicRepos,bio : dataBio, followers : dataFollowers,following : dataFollowing,
        location : dataLocation, twitter_username : dataTwitterUsername, company : dataCompany, blog : dataBlog } = data;

    const template = document.querySelector('#user-profil-template');

    const userSection = document.getElementById('user-section');
    userSection.innerHTML = '';
    userSection.animation = '';

    const templateClone = template.content.cloneNode(true);

    templateClone.querySelector('#user-img').src = dataAvatarUlr;
    templateClone.querySelector('#user-img-mobile').src = dataAvatarUlr;
    templateClone.querySelector('#user-username').textContent = `@${dataLogin}`;
    templateClone.querySelector('#user-joined-time').textContent = `Joined ${formatDate(dataCreateAt)}`;
    templateClone.querySelector('#user-joined-time').dataTime = dataCreateAt;
    templateClone.querySelector('#user-name').textContent = dataName;

    const userBio = templateClone.querySelector('#user-bio');
    userBio.innerText = dataBio ?? 'This profile has no bio';
    availableInfos(dataBio,userBio);

    templateClone.querySelector('#user-repos').textContent = dataPublicRepos;
    templateClone.querySelector('#user-followers').textContent = dataFollowers;
    templateClone.querySelector('#user-following').textContent = dataFollowing ?? 'Not Available';

    const userLocation = templateClone.querySelector('#user-location');
    userLocation.querySelector('.user-link').textContent = dataLocation ?? 'Not Available';
    availableInfos(dataLocation,userLocation);

    const userTwitter = templateClone.querySelector('#user-twitter');
    userTwitter.querySelector('.user-link').textContent = dataTwitterUsername ?? 'Not Available';
    if(dataTwitterUsername){
        userTwitter.querySelector('.user-link').href = `https://twitter.com/${dataTwitterUsername}`;
    }
    availableInfos(dataTwitterUsername,userTwitter);

    const userBlog = templateClone.querySelector('#user-website');
    userBlog.querySelector('.user-link').textContent = dataBlog ? formatLink(dataBlog) : 'Not Available';
    if(dataBlog){
        userBlog.querySelector('.user-link').href = dataBlog;
    }
    availableInfos(dataBlog,userBlog);

    const userOrganisation = templateClone.querySelector('#user-organization');
    userOrganisation.querySelector('.user-link').textContent = dataCompany ?? 'Not Available';
    if(dataCompany){
        const companyWithoutAt = formatUsername(dataCompany);
        userOrganisation.querySelector('.user-link').href = `https://github.com/${companyWithoutAt}`;
    }
    availableInfos(dataCompany,userOrganisation);

    userSection.append(templateClone);
}


/**
 * Checks if the provided info is available, and if not, adds an opacity-50 class to the input element.
 * 
 * @param {any} info - The info to check for availability
 * @param {HTMLElement} input - The input element to modify if info is not available
 * @example availableInfos(null, document.getElementById('myInput')); // adds opacity-50 class to #myInput
 */
const availableInfos = (info,input) => {
    if(!info){
        input.classList.add('opacity-50');
    }
}

/**
 * Formats a URL by removing the protocol (http/https) from the beginning.
 * 
 * @param {string} link - The URL to format
 * @returns {string} The formatted URL
 * @example formatLink('https://example.com'); // returns 'example.com'
 */
const formatLink = (link) => { return link.replace(/https?:\/\//g, ''); }

/**
 * Formats a username by removing the @ symbol from the beginning.
 * 
 * @param {string} username - The username to format
 * @returns {string} The formatted username
 * @example formatUsername('@johnDoe'); // returns 'johnDoe'
 */
const formatUsername = (username) => { return username.replace(/@/g, ''); }

/**
 * Formats a date string into a human-readable format (DD MMM YYYY).
 * 
 * @param {string} date - The date string to format (in ISO format)
 * @returns {string} The formatted date string
 * @example formatDate('2022-07-25T14:30:00.000Z'); // returns '25 Jul 2022'
 */
const formatDate = (date) => {
    const d = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return   `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}



initTheme();
fetchUser('404diaby');

});