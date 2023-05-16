# Job Application App

This project was created according to Jabama code challenge. In this project we implement page of job application with some filter. You can see [Live Demo](http://jabama.gh-masoud.ir) powered by Vercel.
<br/>
I'm storing the params in url and syncing with inputs and checkbox. Render and fetch data when user click on  **Search** button. All api calls are server-side render with showing fallback error.
<br/>
You can improve it by add application page and other things! and for use this project you can use `npm run dev` script in terminal.

### Features:

- Load list of applications in home page with **Load More** button
- Two input and check box in **Searchbar** for filtering data
- Skeleton cart loading until fully loaded
- Design and Responsive design with SCSS
- Implement error page and not found message with return to home page

### Used packages:

- React
- NextJs
- TypeScript
- SASS
- dayJs
- react-icons

### Additonl thing:

- **Design:** My design based on this [screen shot](https://jabama-jobs-code-challenge.vercel.app/design/desktop-design-home.png)
- **Server:** I'm using this [Api Document](https://jabama-devjobs-api.vercel.app/swagger) for fetching data

### Project folder structure:
    .
    ├── public                  # Public Assets
    ├── src                     # Source files 
    │   ├── assets                # Styles and other assets that needs to be transpiled at the build time
    │   ├── types                 # Global types
    │   ├── pages(app)            # Next.js File routings/App Directory
    │   └── components            # All Major and Minor Components will place here
    ├── config files            # .env files, docker files, bundler configs, .eslintrc, package.json, tsconfig.json, etc. 
    └── README.md
### Component folder structure:
    .
    │   ├── ...
    │   └── components                      
    |           ├── ExampleComponent                   # ExampleComponent Folder
    |           |       ├── components                 # Sub Components of Example Component
    |           |       ├── componentName.module.scss  # Modular Styles
    |           |       └── index.tsx                  # Main File (only contains imports, hook calls and jsx codes)
    │           ├── ...
    
### Snapshots:
- Home Page <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 03 19" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/913f6dcb-86b7-4027-b9cf-ce859b5ef330"> <br/><br/>
- Skeleton Loading <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 03 57" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/0ebecc5e-a56f-4d61-b604-5347fd34419b"> <br/><br/>
- Search Result <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 04 03" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/e8e1ca91-68fb-486d-aabb-2db9942066db"> <br/><br/>
- Not Found Result <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 04 14" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/22e4cb30-7fed-4229-8dd9-08f7d86ecb96"> <br/><br/>
- Error Page <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 04 46" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/967b449b-d82e-4991-987f-3b53c1fd0a0a">
