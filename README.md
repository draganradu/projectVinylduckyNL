# project Vinylducky.NL
[img]

[Jira bord](https://vinylducky.atlassian.net/jira/software/projects/ECBGI/boards/3)


## Tech stack

Nuxt 3
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

    home --> scrum
    home --> vinylShop
    home --> contact

    vinylShop --> service
    vinylShop --> product

    service -.-> |has no user | x[create user]
    product -.-> |has no user | x[create user]

```


## position
1 0 [  2 / 003 ]