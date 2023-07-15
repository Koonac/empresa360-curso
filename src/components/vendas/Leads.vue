<template>
	<div>
		<mensagem-retorno />
		<div class="row py-2">
			<div class="col-8">
				<h5>Leads</h5>
			</div>
			<div class="col-4 text-end">
				<router-link class="btn btn-success" to="/home/vendas/leads/create">
					<i class="bi bi-plus-lg"></i>
					Novo registro
				</router-link>
			</div>
		</div>
		<table class="table table-hover">
			<thead>
				<th scope="col">#</th>
				<th scope="col">Nome</th>
				<th scope="col">Telefone</th>
				<th scope="col">Ações</th>
			</thead>
			<tbody>
				<tr v-for="d in dados" :key="d.id">
					<td>{{ d.id }}</td>
					<td>{{ d.nome }}</td>
					<td>{{ d.telefone }}</td>
					<td>
						<router-link
							:to="{ name: 'editarLead', params: { id: d.id } }"
							class="btn btn-sm btn-warning"
						>
							<i class="bi bi-pencil"></i>
						</router-link>
						<button
							type="button"
							class="btn btn-sm btn-danger ms-2"
							@click="deleteDadosApi('http://localhost:3000/leads', d['id'])"
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
		name: "Leads",
		components: {
			MensagemRetorno,
		},
		mixins: [ApiMixin],
		created() {
			this.getDadosApi("http://localhost:3000/leads");
		},
	};
</script>
