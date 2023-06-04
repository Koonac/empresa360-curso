export default {
	data: () => ({
		statusRetorno: "",
		msgRetorno: "",
		msgErro: "",
		dados: {},
	}),
	methods: {
		mensagemRetornoApi(statusRetorno, msgRetorno, msgErro) {
			/* EMITINDO FUNÇÃO EMITTER PARA QUEM ESTIVER OUVINDO */
			this.emitter.emit("mensagemRetorno", {
				exibirMensagemRetorno: true,
				statusRetorno: statusRetorno,
				msgRetorno: msgRetorno,
				msgErro: msgErro,
			});
		},
		getDadosApi(urlApi) {
			fetch(urlApi)
				.then((response) => response.json())
				.then((response) => {
					this.dados = response;
				});
		},
		insertDadosApi(urlApi, dados) {
			/* GERANDO ID ALEATÓRIO */
			dados.id = parseInt(Math.random() * 99999);

			// eslint-disable-next-line no-unreachable
			fetch(urlApi, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dados),
			})
				.then((response) => response.json())
				.then(() => {
					// this.$router.push(`/home/vendas/leads/${dados.id}`);
					this.$router.push({ name: "editarLead", params: { id: dados.id } });

					this.mensagemRetornoApi(
						"SUCESSO",
						"Registro inserido com sucesso.",
						""
					);
				})
				.catch((error) => {
					this.mensagemRetornoApi(
						"ERRO",
						"Ocorreu um erro ao inserir registro.",
						JSON.stringify(error)
					);
				});
		},
		updateDadosApi(urlApi, dados) {
			fetch(urlApi, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dados),
			})
				.then((response) => response.json())
				.then(() => {
					this.mensagemRetornoApi(
						"SUCESSO",
						"Dados da lead alterados com sucesso.",
						""
					);
				})
				.catch((error) => {
					this.mensagemRetornoApi(
						"ERRO",
						"Ocorreu um erro ao alterar dados da lead.",
						JSON.stringify(error)
					);
				});
		},
		deleteDadosApi(urlApi, idRegistroDelete) {
			fetch(urlApi + `/${idRegistroDelete}`, {
				method: "DELETE",
			})
				.then((response) => response.json())
				.then(() => {
					this.getDadosApi(urlApi);
					this.mensagemRetornoApi("SUCESSO", "Lead deletada com sucesso.", "");
				})
				.catch((error) => {
					this.mensagemRetornoApi(
						"ERRO",
						"Ocorreu um erro ao deletar a lead.",
						JSON.stringify(error)
					);
				});
		},
	},
};
