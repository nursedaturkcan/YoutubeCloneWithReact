This project encompasses a part of the frontend of a YouTube-like video sharing platform. Users can watch videos, perform searches, view popular videos on the homepage, and explore videos based on their interests through categorized sections. Here's a summary of the project's components and functionalities:

1. Main Component: `App`
   - Utilizes `BrowserRouter` for handling page navigation.
   - Contains the `Header` component, which includes the page title and a search bar.
   - Uses the `Routes` component to match different URLs with corresponding pages and render the appropriate components.

2. `Header` Component:
   - Displays the page title and logo.
   - Features a search bar that enables users to search for videos.

3. `SideNav` Component:
   - A side menu that contains various categories.
   - Users can click on categories to filter videos based on their selection.

4. `VideoCard` Component:
   - Represents small cards displaying videos, listed on the homepage and in search results.
   - Contains video title, channel name, view count, publication date, and other related information.

5. `Feed` Component:
   - Represents the homepage.
   - Lists videos based on the selected category.

6. `SearchResults` Component:
   - Represents search results.
   - Lists videos based on the search query.

7. `StringArea` Component:
   - Used for truncating text to a specific length.
   - Clicking on the text allows the full content to be displayed.

8. `VideoDetail` Component:
   - Displays video details and related content.
   - Contains a video player, title, description, like, and share buttons.
   - Shows related videos on the side, allowing users to explore more content.

9. `YoutubeContext` and `ContextProvider`:
   - Provides a context and context provider for fetching videos based on categories and using them in the homepage and search results.

This project is built using popular libraries such as React, React Router, and axios to create a frontend interface for a sophisticated video sharing platform. It enables users to explore and watch video content by selecting categories, searching for specific videos, and discovering popular videos on the homepage.
Preview: 
 

https://github.com/nursedaturkcan/YoutubeCloneWithReact/assets/129687664/55d39bd5-c7f9-4c9c-b528-675bf6bc4fa0


 
 
 # Kullanılan Kütüphaneler
 -react-rouer-dom
 -axios
 -react-icons
 -tailwind
 -milify
 -react-player

 # Yapılacaklar
 -SideNav.jsx bileşeninde kategoriler listenelenecek ve seçilen kategori bilgisine tüm bileşenlerin erişebilmesi için  context yapısında tutulması.
 --Seçilen kategori state'ı her değiştiğinde ilgili kategoriye ait veri çekme ve bu veriyi feed.jsx te kullanmak.
 -bu veriyi Feed.jsx kullan ve her bir video objesi için ekrana VideoCard.jsx bas

 --Videolardan birine tıklandığında kullanıcıyı o videonun id'sini parametre olarak içeren bir linke yönlendir.
 --"VideoDetail.jsx" sayfasında url dan parametreyi al
 --parametreyle beraber api ye video detayları için istek atma
 -- api'den gelen veriyi ekrana basma
# YoutubeCloneWithReact
