/* IMPORTAÇÕES */
import { createRouter, createWebHistory } from "vue-router";
//createWebHashHistory
import Site from "@/views/Site.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/components/dashboard/Dashboard.vue";
import Servicos from "@/components/servicos/Servicos.vue";
import Vendas from "@/components/vendas/Vendas.vue";
import Leads from "@/components/vendas/Leads.vue";
import Lead from "@/components/vendas/Lead.vue";
import Contratos from "@/components/vendas/Contratos.vue";

/* INICIANDO ARRAY DE ROTAS */
const rotas = [
	{
		path: "/", //Url que deve ser acessada para ser direcionado ao componente em questão
		component: Site,
	},
	{
		path: "/home", //Url que deve ser acessada para ser direcionado ao componente em questão
		component: Home,
		children: [
			{ path: "servicos", component: Servicos },
			{
				path: "vendas",
				component: Vendas,
				children: [
					{ path: "leads", component: Leads },
					{ path: "leads/:id", component: Lead },
					{ path: "contratos", component: Contratos },
				],
			},
			{ path: "dashboard", component: Dashboard },
		],
	},
	{
		path: "/login", //Url que deve ser acessada para ser direcionado ao componente em questão
		component: Login,
	},
];

/* INICIANDO OBJETO DE ROUTER */
const router = createRouter({
	history: createWebHistory(),
	routes: rotas,
});

/* EXPORTANTO OBJETO ROUTER */
export default router;
