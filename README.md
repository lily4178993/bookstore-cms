<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
    - [Environment Variables](#environment-variables)
    - [Setting Up Environment Variables](#setting-up-environment-variables)
  - [Install](#install)
  - [Usage](#usage)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [Bookstore CMS] <a name="about-project"></a>

**[Bookstore CMS]** is a React-based web application that enables users to browse books and add interract with them.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

 <ul>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
      <li><a href="https://react.dev/">React</a></li>
      <li><a href="https://testing-library.com/docs/react-testing-library/intro/">React-Testing-Library</a></li>
      <li><a href="https://reactrouter.com/en/main">React-Router</a></li>
      <li><a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a></li>
    </ul>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Efficient]**
- **[Interactive]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

To successfully run and contribute to this project, make sure you have the following:
- **Node JS**: Required for installing project dependencies and running the development server.
- **npm**: Learn how to manage project dependencies using npm (Node Package Manager).
- **An Integrated Development Environment (IDE)**: We suggest using [Visual Studio Code](https://code.visualstudio.com/) as your code editor, but you can use any IDE of your choice.

### Setup

To set up the **Bookstore CMS** project on your local machine, follow these steps:

1. **Clone this repository**:
    ```bash
      git clone https://github.com/lily4178993/bookstore-cms.git
      cd bookstore-cms
    ```
2. **Set up all the environment variable**.

#### Environment Variables<a name="environment-variables"></a>

To run the **Bookstore CMS** application, you need to configure the following environment variables:

- `REACT_APP_URL`: The API URL of the [API Provider](https://www.notion.so/Bookstore-API-51ea269061f849118c65c0a53e88a739).
- `REACT_APP_KEY`: The API Key for accessing the data form the API.


#### Setting Up Environment Variables<a name="setting-up-environment-variables"></a>

Follow these steps to set up your environment variables:

1. Create a `.env` file in the project's root directory.
2. Inside the `.env` file, add the necessary environment variables with their corresponding values. For example:
    ```
      REACT_APP_URL=your-api-url-here
      REACT_APP_KEY=your-api-key-here
    ```
    Replace `your-api-url-here` and `your-api-key-here` with the actual values you obtained or want to use.
> ////////////////////
>
> **Note**:
> Keep these API keys and sensitive information confidential and do not commit the `.env` file to version control.
>
> ////////////////////

---

<!-- INSTALL -->
## **Install 🏗️**<a name="install"></a>

Once you have cloned the repository and configured the environment variables, you can run the following command to install the project's dependencies:

```bash
  npm install
```
---

<!-- USAGE -->
## **Usage 📂**<a name="usage"></a>

To use the **Bookstore CMS** application, follow these steps:

1. **Track linter errors**

    Track errors with the following command:
    - Track CSS linter errors, run:
    ```bash
    npx stylelint "**/*.{css,scss}" --fix
    ```
    - Track JavaScript linter errors, run:
    ```bash
    npx eslint "**/*.{js,jsx}" --fix
    ```

2. **Run the Development Server**:
    - Open your terminal/command prompt.
    - Navigate to the project's root directory.
    - Run the following command:
      ```bash
        npm start
      ```
    This will start the development server.

3. **Access the Application**:
    - Open your web browser.
    - Navigate to the following URL:
      ```bash
        http://localhost:3000
      ```
    You will now be able to interact with the **Bookstore CMS** application in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

- GitHub: [@lily4178993](https://github.com/lily4178993)
- LinkedIn: [Nelly T.](https://www.linkedin.com/in/nelly-t-330414266/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[Add Redux in React components]**
- [ ] **[Connect to API]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/lily4178993/bookstore-cms/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project:

- Star the project ⭐️
- Fork the project 🎣
- Share with others 🗺️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thanks Microverse Team for helping me.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
