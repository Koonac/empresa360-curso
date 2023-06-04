/* IMPORTAÇÕES */
import { createRouter, createWebHistory } from "vue-router";
//createWebHashHistory
/* IMPORTANDO VIEWS */
import Site from "@/views/Site.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
/* DASHBOARD */
import Dashboard from "@/components/dashboard/Dashboard.vue";
import DashboardRodape from "@/components/dashboard/DashboardRodape.vue";
/* SERVIÇOS */
import Servicos from "@/components/servicos/Servicos.vue";
import Servico from "@/components/servicos/Servico.vue";
import Indicadores from "@/components/servicos/Indicadores.vue";
import Opcoes from "@/components/servicos/Opcoes.vue";
/* VENDAS */
import Vendas from "@/components/vendas/Vendas.vue";
import VendasPadrao from "@/components/vendas/VendasPadrao.vue";
import Leads from "@/components/vendas/Leads.vue";
import Lead from "@/components/vendas/Lead.vue";
import Contratos from "@/components/vendas/Contratos.vue";

/* DEFININDO CONSTANTE DA ROTA DASHBOARD */
const rotaDashboard = {
	name: "dashboard",
	path: "dashboard",
	components: { deafult: Dashboard, rodape: DashboardRodape },
};

/* DEFININDO CONSTANTE DA ROTA VENDAS */
const rotaVendas = {
	path: "vendas",
	component: Vendas,
	children: [
		{
			name: "vendas",
			alias: "/vendas",
			path: "",
			component: VendasPadrao,
		},
		{
			name: "leads",
			alias: "/leads",
			path: "leads",
			component: Leads,
		},
		{
			name: "editarLead",
			alias: "/l/editarLead",
			path: "leads/:id",
			component: Lead,
		},
		{
			name: "criarLead",
			alias: "/l/criarLead",
			path: "leads/create",
			component: Lead,
		},
		{
			name: "contratos",
			alias: "/contratos",
			path: "contratos",
			component: Contratos,
		},
	],
};

/* DEFININDO CONSTANTE DA ROTA SERVIÇOS */
const rotaServicos = {
	name: "servicos",
	path: "servicos",
	component: Servicos,
	children: [
		{
			name: "servico",
			path: ":id",
			components: {
				default: Servico,
				indicadores: Indicadores,
				opcoes: Opcoes,
			},
		},
	],
};

/* INICIANDO ARRAY DE ROTAS */
const rotas = [
	{
		name: "site", // Nome da rota
		path: "/", //Url que deve ser acessada para ser direcionado ao componente em questão
		component: Site, //Componente a ser renderizado na rota
	},
	{
		name: "home",
		path: "/home", //Url que deve ser acessada para ser direcionado ao componente em questão
		component: Home,
		children: [rotaDashboard, rotaVendas, rotaServicos],
	},
	{
		name: "login",
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
