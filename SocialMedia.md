# Social Media Tree


```mermaid
graph TB

website
instagram
etsy
git
behance
linkedin
twitter


website --> etsy
website --> instagram
website --> git
website --> behance
website --> twitter

instagram --> etsy

behance --> linkedin
behance --> instagram
behance --> git
behance --> twitter

git --> website

twitter --> website

    subgraph Update
        Facebook
        youtube
        medium
    end

    subgraph Create
        Flickr
        Dribbble
        youtube
        tumblr
    end
```