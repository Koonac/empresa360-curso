<template>
	<div>
		<h5>{{ lead.id }} - {{ lead.nome }}</h5>
		<div class="row mb-3">
			<div class="col-sm-2 col-form-label">ID</div>
			<div class="col-sm-10">
				<input
					type="text"
					readonly
					class="form-control-plaintext"
					:value="lead.id"
				/>
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-sm-2 col-form-label">Nome</div>
			<div class="col-sm-10">
				<input type="text" class="form-control" :value="lead.nome" />
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-sm-2 col-form-label">Telefone</div>
			<div class="col-sm-10">
				<input type="text" class="form-control" :value="lead.telefone" />
			</div>
		</div>
		<div class="col-auto">
			<button type="button" class="btn btn-primary">Atualizar</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Lead",
		data: () => ({
			lead: [],
		}),
		methods: {
			getLead() {
				fetch(`http://localhost:3000/leads/${this.$route.params.id}`)
					.then((response) => response.json())
					.then((response) => {
						this.lead = response;
					});
			},
		},
		created() {
			this.getLead();
		},
	};
</script>
