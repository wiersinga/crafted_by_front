<template>
    <div>
        <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
		<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" class="w-36 h-36 mx-auto rounded-full dark:bg-gray-500 aspect-square">
		<div class="space-y-4 text-center divide-y dark:divide-gray-700">
			<div class="my-2 space-y-1">
				<h2 class="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
				<p class="px-5 text-xs sm:text-base dark:text-gray-400">Age</p>
			</div>
		</div>
	</div>

    <div>
        <div class="specialities">
            <h2>Me(s) spécialités</h2>
            <div v-for="(speciality, i) in specialities" :key="i" class="speciality">
                <p>{{ speciality.name }}</p>
                <div class="divider"></div>
            </div>
        </div>
        <div class="history">
            <h2>Mon histoire</h2>
            <div class="history">
                <p>{{ history }}</p>
                <div class="divider"></div>
            </div>
        </div>
        <div class="history">
            <h2>Ma méthode  de fabrication</h2>
            <div class="history">
                <p>{{ méthode }}</p>
                <div class="divider"></div>
            </div>
        </div>

    </div>
    </div>

</template>

<script>

</script>

<style>
.divider {
  width: 100%;
  height: 1px;
  background-color: #2C666E;
}
</style>