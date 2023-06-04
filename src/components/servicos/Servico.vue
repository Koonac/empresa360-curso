<template>
	<div class="card">
		<div class="card-header bg-primary text-white">
			{{ dados.servico }}
		</div>
		<div class="card-body">
			<p class="card-text">{{ dados.detalhes }}</p>
		</div>
	</div>
</template>
<script>
	import ApiMixin from "@/components/mixins/ApiMixin";
	export default {
		name: "Servico",
		mixins: [ApiMixin],
		created() {
			if (this.$route.params.id) {
				this.getDadosApi(
					`http://localhost:3000/servicos/${this.$route.params.id}`
				);
			}
		},
		beforeRouteUpdate(to, from, next) {
			// to: $route para onde estamos indo
			// from: $route de onde estamos vindo
			// next: faz com que o fluxo da rota continue

			if (to.params.id) {
				this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
			}
			// console.log(from);

			next();
		},
		/*
		watch: {
			$route(to) {
				//Convensão: to = novo valor, from = valor antigo
				if (to.params.id) {
					this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
				}
			},
		},*/
	};
</script>
