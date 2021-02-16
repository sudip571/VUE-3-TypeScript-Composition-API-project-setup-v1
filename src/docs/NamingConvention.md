### Naming Convention 


1. **vue component naming**
   * The components we define inside components folder are rendered by using them as HTML tag. In order not to conflict them with native HTML tag we should use at least **two words** to name our component.
   * Naming should be in **PascalCase**
Example:
```diff
- Navigation.vue is bad way because it has only one word Navigation 
+ NavigationMenu.Vue is good because it has two words Navigation and Menu
```
This rule may not be applicable to vue component which are rendered via routing.

2. **Props naming**
   use **camelCase** to define props
   Example:
   ```JavaScript
   //declaration
   props:{
       propName:{
           type:String,
           default:""
       }
   }   
   ```

3. **Emit event naming**
   Use **kebab-case** to define emit event in template.
   Example:
   ```html
   <NavigationMenu @show-menu="showMenu">
   <!--here @show-menu is emit event name -->
   ```

4. **writing template element with multilpe attribute**
   if we need to define multiple attribute in a single html element, it is better to write them in separate line instead of in same line.
   Example:
   ```html
   <img src="xyz" alt="xyz image">
   <!-- this is not considered good because two attribute src and alt are in same line -->

   <img 
   src="xyz"
   alt="xyz image"
   >
   <!-- this is  considered good because two attribute src and alt are in separate line -->
   ```
5. **defining TypeScript interface**
    * file name should contain **.interface** in between name and extension
    * property should be **camelCase**
   Example:
   ```diff
   - user.ts is bad file naming
   + user.interface.ts is good file naming
   ```
   ```TypeScript
   //camelCase for properties
   export interface user{
       firstName:String,
       lastName :String
   }
   ```
6. **shared composable file**
    name of composable file should be prefixed by **use** 
     Example: here xxxx is the file name
     ```diff
     - xxxx.ts is bad
     + usexxxx.ts is good 
     ```


