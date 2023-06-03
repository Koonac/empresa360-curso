<template>
	<div>
		<mensagem-retorno />
		<h5>Leads</h5>
		<table class="table table-hover">
			<thead>
				<th scope="col"></th>
				<th scope="col"></th>
				<th scope="col"></th>
				<th scope="col"></th>
			</thead>
			<tbody>
				<tr v-for="d in dados" :key="d['id']">
					<td>{{ d["id"] }}</td>
					<td>{{ d["nome"] }}</td>
					<td>{{ d["telefone"] }}</td>
					<td>
						<router-link
							:to="`/home/vendas/leads/${d['id']}`"
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
