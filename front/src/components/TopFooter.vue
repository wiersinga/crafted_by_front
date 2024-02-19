<template>
    <div class="topF mt-4 flex justify-center xl:col-span-2 xl:mt-0">
        <ul role="list" class="mt-6 space-y-4">
            <ul>
                <a href="#" class="text-sm leading-6">A propos</a>
            </ul>
            <ul>
                <a href="#" class="text-sm leading-6">Aide</a>
                <div class="dropdown dropdown-right">
                    <div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-xs text-info">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8C16 12.4182 12.4182 16 8 16ZM8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6C4.46538 1.6 1.6 4.46538 1.6 8C1.6 11.5346 4.46538 14.4 8 14.4ZM7.2 10.4H8.8V12H7.2V10.4ZM8.8 9.08408V9.6H7.2V8.4C7.2 7.95816 7.55816 7.6 8 7.6C8.66272 7.6 9.2 7.06272 9.2 6.4C9.2 5.73726 8.66272 5.2 8 5.2C7.41784 5.2 6.93248 5.61458 6.82304 6.16462L5.25385 5.85077C5.5091 4.56735 6.6416 3.6 8 3.6C9.5464 3.6 10.8 4.8536 10.8 6.4C10.8 7.6684 9.95656 8.73984 8.8 9.08408Z"
                                fill="#F0EDEE" />
                        </svg>
                    </div>
                    <div tabindex="0" class="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                        <div tabindex="0" class="card-body">
                            <h2 class="card-title">Vous avez besoin d'info ou d'aide?</h2>
                            <p>Contactez-nous directement sur notre xxx!</p>
                        </div>
                    </div>
                </div>
            </ul>
            <ul>
                <a href="#" class="text-sm leading-6">Conditions d'utilisation</a>
            </ul>
            <ul>
                <a href="#" class="text-sm leading-6">Cookies</a>
            </ul>
        </ul>
    </div>
</template>

<style scoped>
.topF {
    background-color: #07393C;
}

a,
h2 {
    color: #F0EDEE;
}</style>