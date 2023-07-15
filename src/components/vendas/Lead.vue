<template>
	<div>
		<h5>{{ dados.id }} - {{ dados.nome }}</h5>
		<div class="row mb-3">
			<div class="col-sm-2 col-form-label">ID</div>
			<div class="col-sm-10">
				<input
					type="text"
					readonly
					class="form-control-plaintext"
					:value="dados.id"
				/>
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-sm-2 col-form-label">Nome</div>
			<div class="col-sm-10">
				<input type="text" class="form-control" v-model="dados.nome" />
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-sm-2 col-form-label">Telefone</div>
			<div class="col-sm-10">
				<input type="text" class="form-control" v-model="dados.telefone" />
			</div>
		</div>
		<div class="col-auto d-flex justify-content-between">
			<router-link class="btn btn-info" :to="{ name: 'leads' }"
				>Voltar</router-link
			>
			<button
				type="button"
				class="btn btn-warning"
				@click="
					this.updateDadosApi(
						`http://localhost:3000/leads/${this.$route.params.id}`,
						this.dados
					)
				"
				v-if="this.$route.params.id"
			>
				Atualizar
			</button>
			<button
				type="button"
				class="btn btn-success"
				@click="this.insertDadosApi(`http://localhost:3000/leads/`, this.dados)"
				v-else
			>
				Inserir
			</button>
		</div>
		<mensagem-retorno />
	</div>
</template>
<script>
	import MensagemRetorno from "@/components/notificacoes/MensagemRetorno.vue";
	import ApiMixin from "@/components/mixins/ApiMixin";
	export default {
		name: "Lead",
		mixins: [ApiMixin],
		props: ["id"],
		components: {
			MensagemRetorno,
		},
		data: () => ({}),
		created() {
			if (this.id) {
				this.getDadosApi(`http://localhost:3000/leads/${this.id}`);
			}
		},
	};
</script>
