<template>
	<div class="container-fluid">
		<div
			class="row vw-100 vh-100 d-flex justify-content-center align-items-center"
		>
			<div class="col-10 text-center p-4 border rounded-3 shadow shadow-lg">
				<h3>-__- oppss... Página não encontrada!</h3>
				<router-link :to="{ name: 'site' }" class="btn btn-success mt-2"
					>Início</router-link
				>
			</div>
		</div>
	</div>
</template>
