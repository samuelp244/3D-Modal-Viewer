# 3D-modal-viewer

Live - https://www.3dviewer.cf/

## Libraries/tech Used


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
