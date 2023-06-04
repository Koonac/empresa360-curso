<template>
	<div>
		<div class="row">
			<div class="col-3 offset-2 bg-suc">
				<div class="card">
					<div class="card-header bg-success text-white">Leads</div>
					<div class="card-body">{{ dados.length }}</div>
				</div>
			</div>

			<div class="col-3 offset-2">
				<div class="card">
					<div class="card-header bg-success text-white">Contratos</div>
					<div class="card-body">250</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import ApiMixin from "@/components/mixins/ApiMixin";
	export default {
		name: "VendasPadrao",
		mixins: [ApiMixin],
		created() {
			this.getDadosApi("http://localhost:3000/leads");
		},
	};
</script>
