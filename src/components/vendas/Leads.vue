<template>
	<div>
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
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
		name: "Leads",
		data: () => ({
			dados: [],
		}),
		methods: {
			getDadosApi() {
				fetch("http://localhost:3000/leads")
					.then((response) => response.json())
					.then((response) => {
						this.dados = response;
					});
			},
		},
		created() {
			this.getDadosApi();
		},
	};
</script>
