/* IMPORTAÇÕES */
import { createRouter, createWebHistory } from "vue-router";
//createWebHashHistory

/* IMPORTAR DESSA FORMA FAZ COM QUE O VUE ENTENDA QUE OS COMPONENTES 
DEVEM SER RENDERIZADOS SOMENTE QUANDO NECESSÁRIOS */
/* IMPORTANDO VIEWS */
const Site = () => import("@/views/Site.vue");
const Home = () => import("@/views/Home.vue");
const Login = () => import("@/views/Login.vue");
const PaginaNaoEncontrada = () => import("@/views/PaginaNaoEncontrada.vue");
/* DASHBOARD */
const Dashboard = () => import("@/components/dashboard/Dashboard.vue");
const DashboardRodape = () =>
	import("@/components/dashboard/DashboardRodape.vue");
/* SERVIÇOS */
const Servicos = () =>
	import(/*webpackChunkName: "servicos"*/ "@/components/servicos/Servicos.vue");
const Servico = () =>
	import(/*webpackChunkName: "servicos"*/ "@/components/servicos/Servico.vue");
const Indicadores = () =>
	import(
		/*webpackChunkName: "servicos"*/ "@/components/servicos/Indicadores.vue"
	);
const Opcoes = () =>
	import(/*webpackChunkName: "servicos"*/ "@/components/servicos/Opcoes.vue");
/* VENDAS */
const Vendas = () =>
	import(/*webpackChunkName: "vendas"*/ "@/components/vendas/Vendas.vue");
const VendasPadrao = () =>
	import(/*webpackChunkName: "vendas"*/ "@/components/vendas/VendasPadrao.vue");
const Leads = () =>
	import(/*webpackChunkName: "vendas"*/ "@/components/vendas/Leads.vue");
const Lead = () =>
	import(/*webpackChunkName: "vendas"*/ "@/components/vendas/Lead.vue");
const Contratos = () =>
	import(/*webpackChunkName: "vendas"*/ "@/components/vendas/Contratos.vue");

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
			props: true, //ATIVA RECURSO PARA RECEBER O PARÂMETRO :ID NAS PROPS DO COMPONENTE VUE
			alias: "/l/editarLead/:id",
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
		meta: {
			verificaAutorizacao: false,
		},
		path: "/", //Url que deve ser acessada para ser direcionado ao componente em questão
		component: Site, //Componente a ser renderizado na rota
	},
	{
		name: "home",
		meta: {
			verificaAutorizacao: true,
		},
		path: "/home", //Url que deve ser acessada para ser direcionado ao componente em questão
		component: Home,
		children: [rotaDashboard, rotaVendas, rotaServicos],
	},
	{
		name: "login",
		path: "/login", //Url que deve ser acessada para ser direcionado ao componente em questão
		component: Login,
	},
	// {
	// 	path: "/:catchAll(.*)*",
	// 	redirect: { name: "site" },
	// },
	{
		path: "/:catchAll(.*)*",
		component: PaginaNaoEncontrada,
	},
];

/* INICIANDO OBJETO DE ROUTER */
const router = createRouter({
	history: createWebHistory(),
	routes: rotas,
});

/* CRIANDO GUARDAS DE ROTA */
router.beforeEach((to) => {
	if (to.meta.verificaAutorizacao) {
		console.log("Fazer validação");
	} else {
		console.log("Caminho livre");
	}
});

/* EXPORTANTO OBJETO ROUTER */
export default router;
