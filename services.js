// ============================================================
//  services.js  —  HomeLab Portal 設定ファイル
//
//  サービスを追加・編集するときはこのファイルだけ変更してください。
//  HTML は触らなくてOKです。
// ============================================================

const SERVICES = {
  statusItems: [
    { label: "network online", color: "green" },
    { label: "k3s running", color: "blue" },
    { label: "storage 68%", color: "amber" },
  ],
  categories: [
    {
      label: "Knowledge & Source Control",
      services: [
        {
          icon: "🟣",
          name: "Obsidian",
          url: "http://obsidian.local",
          accent: "purple",
          badge: "",
          description: "ナレッジベース・メモ管理",
        },
        {
          icon: "🐙",
          name: "Gitea",
          url: "http://gitea.local",
          accent: "green",
          badge: "git",
          description: "セルフホスト Git リポジトリ",
        },
        {
          icon: "🪵",
          name: "Woodpecker CI",
          url: "http://woodpecker.local",
          accent: "teal",
          badge: "CI",
          description: "CI/CD パイプライン",
        },
      ],
    },
    {
      label: "Monitoring",
      services: [
        {
          icon: "📊",
          name: "Grafana",
          url: "http://grafana.local",
          accent: "amber",
          badge: "metrics",
          description: "メトリクスダッシュボード",
        },
        {
          icon: "🔥",
          name: "Prometheus",
          url: "http://prometheus.local",
          accent: "red",
          badge: "",
          description: "メトリクス収集",
        },
        {
          icon: "📋",
          name: "Loki",
          url: "http://loki.local",
          accent: "blue",
          badge: "",
          description: "ログ集約",
        },
      ],
    },
    {
      label: "Network & Security",
      services: [
        {
          icon: "🛡️",
          name: "Pi-hole",
          url: "http://pihole.local/admin",
          accent: "red",
          badge: "DNS",
          description: "DNS広告ブロック",
        },
        {
          icon: "🔀",
          name: "Traefik",
          url: "http://traefik.local",
          accent: "blue",
          badge: "proxy",
          description: "リバースプロキシ",
        },
        {
          icon: "🔐",
          name: "Vault",
          url: "http://vault.local",
          accent: "amber",
          badge: "secrets",
          description: "シークレット管理",
        },
      ],
    },
    {
      label: "Infrastructure",
      services: [
        {
          icon: "🗄️",
          name: "NAS (DXP2800)",
          url: "http://nas.local",
          accent: "teal",
          badge: "",
          description: "ストレージ・ホームラボ基盤",
        },
        {
          icon: "☁️",
          name: "LocalStack",
          url: "http://localstack.local",
          accent: "amber",
          badge: "AWS",
          description: "AWS ローカルエミュレーター",
        },
        {
          icon: "⎈",
          name: "k3s Dashboard",
          url: "http://k3s.local",
          accent: "blue",
          badge: "k8s",
          description: "Kubernetes クラスター",
        },
        {
          icon: "🤖",
          name: "n8n",
          url: "http://n8n.local",
          accent: "green",
          badge: "",
          description: "ノーコード・ワークフロー自動化",
        },
        {
          icon: "🐳",
          name: "Portainer",
          url: "http://portainer.local",
          accent: "blue",
          badge: "",
          description: "Dockerコンテナ・スタック管理GUI",
        },
      ],
    },
  ],
};
