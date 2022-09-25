# 3D-modal-viewer

Live - https://www.3dviewer.cf/

## Getting Started
this app was build to render and interact with 3D modals. the user can upload a .glb file and view/interact with it instantly. 
this app is deployed in an aws instance. when the file is uploaded, the file is stored in the client/upload folder and the file name and model name are stored in a mongodb collection so that the model names can be listed easily and based on the selected modal name, it's associated filename is accessed from the upload folder.  


## Libraries/tech Used
#### `Frontend` - React.js(Typescript)
 - #### `React-three` - React three.js library which is used to render the canvas and the 3D modal
 - #### `React-Query` - to fetch and cache the list of models to show in dashboard.
 - #### `axios` - for client side Rest Api library
#### `Backend` - Express.js(Typescript)
 - #### `express-fileupload` - used in a post request end point to access file from request and upload the file to the cliennt folder 
 - #### `mongoose` - library to connect and access mongodb
#### `Database` - Mongodb
#### `Hosting` - deployed on an aws ec2 instance


## File structure
#### `client` - client application
- #### `public` - This holds all of the static files including .glb 3D modals
- #### `src`
    - #### `api` - This folder holds api queries 
    - #### `components` - This folder holds all of the different components that will make up our views
     - #### `Dashboard.tsx` -  page which lists all the modal names stored in the mongodb database
     - #### `ModelScreen.tsx` - page which has the canvas which show the 3D modal
     - #### `Navbar.tsx` - Navbar Component 
     - #### `UploadFile.tsx` - Component with the form to upload the modal 
     - #### `Model.tsx` - component which renders the modal
   - #### `App.tsx` 
   - #### `index.tsx` 
 
#### `server` - server application
- #### `client` -
     - `index.html`
     - `static` - consists the client static after react build.
     - `uploads` - .glb modals
- #### `models` - Mongodb fileData schema modal
- #### `server.ts` - server file with the api end points
