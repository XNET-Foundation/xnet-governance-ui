module.exports = {
  apps: [{
    name: 'xnet-governance',
    script: 'yarn',
    args: 'start',
    cwd: './',
    env: {
      PORT: 3005,
      NODE_ENV: 'production'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3005
    },
    env_development: {
      NODE_ENV: 'development',
      PORT: 3005
    }
  }]
};
