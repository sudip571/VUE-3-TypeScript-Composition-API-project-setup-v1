## VS-Code Extension tools
 1. **Vetur** 
 2. **TypeScript Snippets** 
 3. **Tailwind CSS IntelliSense**
 4. **Fast Folder Structure** : In our project, we need to create different  folder and files  inside feature folder.Instead of creating files and folder manually, I have created the boilerplate template inside setting.json with the help of this extension tool.
 To set up FFS in vs-code, open setting.json (ctr+shift+p) and add following lines
 ```JSON
 "folderTemplates.structures": [

        {
            "name": "FD Feature",            
            "omitParentDirectory": false,
            "structure": [
              {
                "fileName": "components/<FTName>.vue"
              },
              {
                "fileName": "interface/<FTName>.interface.ts"
              },
              {
                "fileName": "model/<FTName>Model.ts"
              },
              {
                "fileName": "routes/<FTName>Route.ts"
              },
              {
                "fileName": "services/<FTName>Service.ts"
              },
              {
                "fileName": "stores/<FTName>Module.ts"
              },
              {
                "fileName": "index.ts"                
              }
            ]
          }
     ]
 ```
 Steps:
 * Right click features
 * Click **FFS: Create new Folder** from the option
 * Enter feature name **e.g profileSetting**
 Now, everything needed for feature like component,Interface,route,service,store will be generated with default name feature.
 Don't forget to rename feature with your actual feature's name

5. Markdown Preview Enhanced : To write the kind of documentation  you are reading right now.
