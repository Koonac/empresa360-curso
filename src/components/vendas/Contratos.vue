<template>
	<div>
		<mensagem-retorno />
		<div class="row py-2">
			<div class="col-8">
				<h5>Contratos</h5>
			</div>
			<div class="col-4 text-end">
				<router-link
					class="btn btn-success disabled"
					to="/home/vendas/contratos/create"
				>
					<i class="bi bi-plus-lg"></i>
					Novo registro
				</router-link>
			</div>
		</div>
		<div class="row py-2">
			<div class="col-6">
				<label class="form-label">Pesquisa:</label>
				<input
					type="text"
					class="form-control"
					v-model="formPesquisa.id_like"
					@keyup.enter="pesquisar"
				/>
			</div>
			<div class="col-6">
				<label class="form-label">Data início:</label>
				<div class="input-group">
					<input
						type="date"
						class="form-control"
						v-model="formPesquisa.data_inicio_gte"
					/>
					<input
						type="date"
						class="form-control"
						v-model="formPesquisa.data_fim_lte"
					/>
				</div>
			</div>
			<div class="col-2 py-1">
				<button type="button" class="btn btn-primary" @click="pesquisar">
					Pesquisar
				</button>
			</div>
		</div>
		<table class="table table-hover">
			<thead>
				<th scope="col">#</th>
				<th scope="col">Lead</th>
				<th scope="col">Serviço</th>
				<th scope="col">Data Início</th>
				<th scope="col">Data Fim</th>
				<th scope="col">Ações</th>
			</thead>
			<tbody>
				<tr v-for="d in dados" :key="d.id">
					<td>{{ d.id }}</td>
					<td>{{ d.lead.nome }}</td>
					<td>{{ d.servico.servico }}</td>
					<td>{{ d.data_inicio }}</td>
					<td>{{ d.data_fim }}</td>
					<td>
						<router-link
							:to="{ name: 'editarLead', params: { id: d.id } }"
							class="btn btn-sm btn-warning disabled"
						>
							<i class="bi bi-pencil"></i>
						</router-link>
						<button
							type="button"
							class="btn btn-sm btn-danger ms-2"
							@click="
								deleteDadosApi('http://localhost:3000/contratos', d['id'])
							"
						>
							<i class="bi bi-trash"></i>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import MensagemRetorno from "@/components/notificacoes/MensagemRetorno.vue";
	import ApiMixin from "@/components/mixins/ApiMixin";
	export default {
		name: "Contratos",
		data: () => ({
			parametrosRelacionamento: "?_expand=lead&_expand=servico",
			formPesquisa: {
				id_like: "",
				data_inicio_gte: "",
				data_fim_lte: "",
			},
		}),
		methods: {
			pesquisar() {
				console.log(this.formPesquisa);

				/* PERCORRENDO LAÇO DE OBEJTO KEY E ANALISANDO SE É VAZIO */
				Object.keys(this.formPesquisa).forEach((key) => {
					if (this.formPesquisa[key] == "") delete this.formPesquisa[key];
				});

				/* CONVERTENDO ARRAY EM QUERY PARAMS URL */
				var filtroPesquisa = new URLSearchParams(this.formPesquisa).toString();

				this.getDadosApi(
					`http://localhost:3000/contratos/${this.parametrosRelacionamento}&${filtroPesquisa}`
				);
			},
		},
		components: {
			MensagemRetorno,
		},
		mixins: [ApiMixin],
		created() {
			this.getDadosApi(
				`http://localhost:3000/contratos/${this.parametrosRelacionamento}`
			);
		},
	};
</script>
