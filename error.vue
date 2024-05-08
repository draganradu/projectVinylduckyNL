<template>
    <div class="error-container">
        <div class="inner">
            <router-link to="/" class="back"><BootstrapIcon name="backspace-fill" /></router-link>
            <div class="title">
                <span>Error</span>
                <h1>404</h1>
            </div>
            
            <p>Page not found</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

$color: #18191A;
$highlight: white;

.error-container {
    background-color: $color;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    

    .inner {
        border: 5px solid $highlight;
        margin: auto;
        position: relative;
    }

    .title, p {
        padding-left: 40px;
        padding-right: 40px;
    }

    .title {
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: $highlight;
        color: $color;
        font-weight: 500;

        h1 {
            font-size: 80px;
        }
    }

    p {
        padding-top: 10px;
        padding-bottom: 20px;
        color: $highlight;
    }

    .back {
        color: $color;
        position: absolute;
        right: 0;
        top: -5px;
        font-size: 30px;

        &:hover {
            color: red;
        }
    }
}
</style>