// ============================================================
//  services.js  —  HomeLab Portal 設定ファイル
//
//  サービスを追加・編集するときはこのファイルだけ変更してください。
//  HTML は触らなくてOKです。ブラウザ上の "services" ボタンからも編集できます。
// ============================================================

const SERVICES = {
  categories: [
    {
      label: "Knowledge & Source Control",
      services: [
        {
          icon: "🟣",
          name: "Wiki",
          url: "http://wiki.local",
          accent: "purple",
          badge: "",
          description: "内部 Wiki",
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
          description: "DNS 広告ブロック",
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
          name: "NAS",
          url: "http://nas.local",
          accent: "teal",
          badge: "",
          description: "ストレージ",
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
          description: "ワークフロー自動化",
        },
        {
          icon: "🐳",
          name: "Portainer",
          url: "http://portainer.local",
          accent: "blue",
          badge: "",
          description: "Docker 管理 GUI",
        },
      ],
    },
  ],
};
