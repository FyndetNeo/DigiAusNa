## File Based Routing

We use file base routing, implemented in App.tsx. .tsx files inside this pages directory will be interpreted as routes.

if the file name is index.tsx it will be the base route of the parent directory.

<pre>
Example: 
|-- pages/ 
   |-- dashboard/ 
      |--$id.tsx 
      |-- analytics.tsx 
      |-- index.tsx 
   |-- about.tsx 
   |-- index.tsx  

This structure has the following routes:
    - '/' => pages/index.tsx
    - '/about' => pages/about.tsx
    - '/dashboard' => pages/dashboard/index.tsx
    - '/dashboard/analytics' => pages/dashboard/analytics.tsx
    - '/dashboard/:[id]' => pages/dashboard/$id.tsx
</pre>
  
Dynamic Routes: Files prefixed with a dollar sign ($) or a bracket notation (like [id]) are interpreted as dynamic routes. In your structure, $id.tsx under dashboard represents a dynamic route and matches any path like /dashboard/123, /dashboard/abc, etc., where 123 or abc is a dynamic segment of the URL.

