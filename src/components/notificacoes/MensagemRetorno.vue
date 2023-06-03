<template>
	<div
		class="alert my-3 py-2"
		:class="statusRetornoClasse"
		role="alert"
		v-show="exibirMensagemRetorno"
	>
		{{ msgRetorno }}
	</div>
</template>
<script>
	export default {
		name: "MensagemRetorno",
		data: () => ({
			exibirMensagemRetorno: false,
			statusRetorno: "",
			msgRetorno: "",
			msgErro: "",
		}),
		watch: {
			exibirMensagemRetorno(valorNovo) {
				if (valorNovo) {
					setTimeout(() => {
						this.exibirMensagemRetorno = false;
					}, 5000);
				}
			},
		},
		computed: {
			statusRetornoClasse() {
				switch (this.statusRetorno) {
					case "SUCESSO":
						return "alert-success";
					case "ERRO":
						return "alert-danger";
					default:
						return "alert-info";
				}
			},
		},
		mounted() {
			this.emitter.on("mensagemRetorno", (params) => {
				this.exibirMensagemRetorno = params.exibirMensagemRetorno;
				this.statusRetorno = params.statusRetorno;
				this.msgRetorno = params.msgRetorno;
				this.msgErro = params.msgErro;
			});
		},
	};
</script>
