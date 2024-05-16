# project Vinylducky.NL
[img]

[Jira bord](https://vinylducky.atlassian.net/jira/software/projects/ECBGI/boards/3)


## Deploy

```bash
nuxt generate 
firebase deploy
```

## Tech stack

Nuxt 3 (3.11)
Vue 3
Bootstrap 5
SCSS (SASS 1.7)
MermaidJS
NPM

## Page Structure

```mermaid
graph TB
    home[homepage]
    scrum[Scrum Master]
    contact[Contact and about]
    vinylShop[ShopPage]
    service[ShopPageService]
    product[ShopPageProducts]
    search[search result]

    home --> scrum
    home --> vinylShop
    home --> contact

    vinylShop --> service
    vinylShop --> product
    vinylShop --> search

    service -.-> |has no user | x[create user]
    product -.-> |has no user | x[create user]

```

## Structure
// ------------- Init and Import
// ------------- Data
// ------------- Hooks / methods
// ------------- Logic
// ------------- SEO

## position
1 0 [  7 / 001 ]