<template>
	<div>
		<mensagem-retorno />
		<div class="row">
			<div class="col-8">
				<h5>Serviços</h5>
			</div>
			<div class="col-4 text-end">
				<router-link class="btn btn-success" to="/home/vendas/leads/create">
					<i class="bi bi-plus-lg"></i>
					Novo registro
				</router-link>
			</div>
		</div>
		<hr />
		<div class="row">
			<div class="col mb-3" v-for="d in dados" :key="d.id">
				<router-link :to="{ name: 'servico', params: { id: d.id } }">
					<div class="card" style="width: 12rem">
						<img class="card-img-top" :src="`/img/${d.icone}`" :alt="d.icone" />
						<div class="card-body tect-center">
							<p class="card-text">{{ d.servico }}</p>
						</div>
					</div>
				</router-link>
			</div>
		</div>

		<!-- ROUTER VIEW NAME = DEFAULT -->
		<router-view class="mt-2" />

		<!-- ROUTER VIEW NAME = INDICADORES -->
		<router-view class="mt-2" name="indicadores" />

		<!-- ROUTER VIEW NAME = OPÇÕES -->
		<router-view class="mt-2" name="opcoes" />
	</div>
</template>
<script>
	import MensagemRetorno from "@/components/notificacoes/MensagemRetorno.vue";
	import ApiMixin from "@/components/mixins/ApiMixin";
	export default {
		name: "Servicos",
		components: {
			MensagemRetorno,
		},
		mixins: [ApiMixin],
		created() {
			this.getDadosApi("http://localhost:3000/servicos");
		},
	};
</script>
