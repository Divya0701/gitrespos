In this assignment let's build a **Github Popular Repos** by applying the concepts we have learned till now.

### Refer to images below:

 <br/>
 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif" alt="github popular repos output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>

**Error View**

 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-error-view-output.gif" alt="github popular repos error view output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>
 
 #### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Success](https://assets.ccbp.in/frontend/content/react-js/github-repos-success-sm-ouput.gif)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Loading](https://assets.ccbp.in/frontend/content/react-js/github-repos-sm-loading-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Error](https://assets.ccbp.in/frontend/content/react-js/github-repos-error-view-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Success](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-success-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Loading](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-loading-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Error](https://assets.ccbp.in/frontend/content/react-js/github-repos-error-view-lg-output.png)

</details>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- When the page is opened initially,

  - _loader_ should be displayed
  - Make HTTP GET request to the following URL `https://apis.ccbp.in/popular-repos?language=` with language filter as `ALL`

    Example URL to fetch data with `ALL` filter `https://apis.ccbp.in/popular-repos?language=ALL`

  - After fetching the data, the updated repositories list should be displayed

- When a language filter is selected

  - _loader_ should be displayed
  - An HTTP GET request should be made to the above-mentioned URL with the `id` of the selected language.
  - After fetching the data, the updated repositories list should be displayed

- The _loader_ should be displayed when
  - The page is opened at initial
  - When a new language filter is clicked
- The default selected language filter is `All`
- The `GithubPopularRepos` component will consist of `languageFiltersData`

  | Key                | Data Type       |
  | ------------------ | --------------- |
  | languageFilterData | Array\<object\> |

- The language filter object will have the following properties

  | Key      | Data Type |
  | -------- | --------- |
  | id       | String    |
  | language | String    |

- The fetched data object will have the following properties

  | Key           | Data Type       |
  | ------------- | --------------- |
  | popular_repos | Array\<object\> |

- Access the list of repositories from the fetched data using the key `popular_repos`
- Each repository object will have the following properties

  | Key          | Data Type |
  | ------------ | --------- |
  | id           | String    |
  | avatar_url   | String    |
  | name         | String    |
  | stars_count  | Number    |
  | forks_count  | Number    |
  | issues_count | Number    |

- The `LanguageFilterItem` component should receive the following props

  | Key      | Data Type |
  | -------- | --------- |
  | id       | String    |
  | language | String    |

</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/GithubPopularRepos/index.js`
  - `src/components/GithubPopularRepos/index.css`
  - `src/components/LanguageFilterItem/index.js`
  - `src/components/LanguageFilterItem/index.css`
  - `src/components/RepositoryItem/index.js`
  - `src/components/RepositoryItem/index.css`
  </details>

<details>
<summary>Click to view the Components Structure</summary>

#### Components Structure

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-component-breakdown-structure.png" alt="home-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

### Quick Tip

- To show the animated loader, we need to import the `Loader` component as
  - `import Loader from 'react-loader-spinner'`
- In order to render the given animated loader, use **ThreeDots** for `type` attribute & also use **#0284c7** for `color` attribute of `Loader` component

  ```
  <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
  ```

<br/>

> #### Important Note
>
> **The following HTML attributes are required for the HTML button and image elements for the tests to pass**
>
> - Wrap the Loader component with an HTML container element and add the `testid` attribute value as `loader` to it
>
>   ```
>   <div testid="loader">
>      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
>   </div>
>   ```

### Resources

<details>
<summary>Data fetch URLs</summary>

#### Data Fetch URLs

- `https://apis.ccbp.in/popular-repos?language=`

</details>

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/stars-count-img.png](https://assets.ccbp.in/frontend/react-js/stars-count-img.png) - alt text should be **stars**
- [https://assets.ccbp.in/frontend/react-js/forks-count-img.png](https://assets.ccbp.in/frontend/react-js/forks-count-img.png) - alt text should be **forks**
- [https://assets.ccbp.in/frontend/react-js/issues-count-img.png](https://assets.ccbp.in/frontend/react-js/issues-count-img.png) - alt text should be **open-issues**
- [https://assets.ccbp.in/frontend/react-js/api-failure-view.png](https://assets.ccbp.in/frontend/react-js/api-failure-view.png) - alt text should be **failure view**

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #0284c7; width: 150px; padding: 10px; color: black">Hex: #0284c7</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #f8f8ff; width: 150px; padding: 10px; color: black">Hex: #f8f8ff</div>
<div style="background-color: #e73959; width: 150px; padding: 10px; color: white">Hex: #e73959</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>

<br/>
</details>

#### Font-families

- Roboto
- Lobster

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
