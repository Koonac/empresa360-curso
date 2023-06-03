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
		<div class="col-auto">
			<button
				type="button"
				class="btn btn-primary"
				@click="
					this.updateDadosApi(
						`http://localhost:3000/leads/${this.$route.params.id}`,
						this.dados
					)
				"
			>
				Atualizar
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
		components: {
			MensagemRetorno,
		},
		data: () => ({}),
		created() {
			this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`);
		},
	};
</script>
