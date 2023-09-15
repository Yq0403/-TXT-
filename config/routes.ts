const routes = [
  {
    path: '/login',
    component: '@/pages/login',
  },
  {
    path: '/',
    component: '@/layouts/main',

    routes: [
      {
        path: '/cluster',
        name: '集群管理',
        routes: [
          {
            path: '/cluster/overview',
            name: '概览',
            component: '@/pages/cluster/overview',
            permissionScope: 'monitor',
          },
          {
            path: '/cluster/host',
            name: '主机',
            component: '@/pages/cluster/host',
            permissionScope: 'hosts',
          },
          {
            path: '/cluster/service',
            name: '服务',
            component: '@/pages/cluster/service',
            permissionScope: 'manager',
          },
          {
            path: '/cluster/inventory',
            name: '硬盘',
            component: '@/pages/cluster/inventory',
            permissionScope: 'hosts',
          },
          {
            path: '/cluster/osd',
            name: 'OSD',
            component: '@/pages/cluster/osd',
            permissionScope: 'osd',
          },
          {
            path: '/cluster/pool',
            name: '存储池',
            component: '@/pages/cluster/pool',
            permissionScope: 'pool',
          },
          {
            path: '/cluster/crush',
            name: '集群拓扑',
            component: '@/pages/cluster/crush',
            permissionScope: 'monitor',
          },
          {
            path: '/cluster/mon',
            name: 'Mon',
            component: '@/pages/cluster/mon',
            permissionScope: 'monitor',
          },
          {
            path: '/cluster/module',
            name: '模块',
            component: '@/pages/cluster/module',
            permissionScope: 'manager',
          },
          {
            path: '/cluster/logs',
            name: '日志',
            component: '@/pages/cluster/logs',
            permissionScope: 'log',
          },
          {
            path: '/cluster/configuration',
            name: '配置',
            component: '@/pages/cluster/configuration',
            permissionScope: 'config-opt',
          },
        ],
      },

      {
        path: '/rbd',
        name: '块存储',
        routes: [
          {
            path: '/rbd/image',
            name: '卷管理',
            component: '@/pages/rbd/image',
            permissionScope: 'rbd-image',
          },
          {
            path: '/rbd/namespace',
            name: '命名空间',
            component: '@/pages/rbd/namespace',
            permissionScope: 'rbd-image',
          },
          {
            path: '/rbd/trash',
            name: '回收站',
            component: '@/pages/rbd/trash',
            permissionScope: 'rbd-image',
          },
          {
            path: '/rbd/iscsi-gateway',
            name: 'iSCSI网关',
            component: '@/pages/rbd/iscsi-gateway',
            permissionScope: 'iscsi',
          },
          {
            path: '/rbd/iscsi-targets',
            name: 'iSCSI Targets',
            component: '@/pages/rbd/iscsi-targets',
            permissionScope: 'iscsi',
          },
          {
            path: '/rbd/mirroring',
            name: 'Mirror',
            component: '@/pages/rbd/mirroring',
            permissionScope: 'rbd-mirroring',
          },
        ],
      },

      {
        path: '/rgw',
        name: '对象存储',
        component: '@/pages/rgw/bootstrap',
        routes: [
          // {
          //   path: "/rgw/overview",
          //   name: "概览",
          //   component: "@/pages/rgw/overview",
          //   permissionScope: "rgw",
          // },
          {
            path: '/rgw/bucket',
            name: '桶管理',
            component: '@/pages/rgw/bucket',
            permissionScope: 'rgw',
          },
          {
            path: '/rgw/user',
            name: '用户管理',
            component: '@/pages/rgw/user',
            permissionScope: 'rgw',
          },
          {
            path: '/rgw/gateway',
            name: '网关管理',
            component: '@/pages/rgw/gateway',
            permissionScope: 'rgw',
          },
        ],
      },

      // {
      //   path: "/cephfs",
      //   name: "文件存储",
      //   routes: [
      //     {
      //       path: "/cephfs/overview",
      //       name: "概览",
      //       component: "@/pages/cephfs/overview",
      //       permissionScope: "cephfs",
      //     },
      //     {
      //       path: "/cephfs/instance",
      //       name: "CephFS",
      //       component: "@/pages/cephfs/instance",
      //       permissionScope: "cephfs",
      //     },
      //     {
      //       path: "/cephfs/nfs",
      //       name: "NFS",
      //       component: "@/pages/cephfs/nfs",
      //       permissionScope: "cephfs",
      //     },
      //   ],
      // },
      {
        path: '/identity',
        name: '认证管理',
        hideInMenu: true,
        routes: [
          {
            path: '/identity/user',
            name: '用户',
            component: '@/pages/identity/user',
            permissionScope: 'user',
          },
        ],
      },
      {
        path: '/monitor',
        name: '监控告警',
        routes: [
          {
            path: '/monitor/host-monitor',
            name: '主机监控',
            component: '@/pages/monitor/host-monitor',
            permissionScope: 'prometheus',
          },
          {
            path: '/monitor/osd-monitor',
            name: 'OSD 监控',
            component: '@/pages/monitor/osd-monitor',
            permissionScope: 'prometheus',
          },
          {
            path: '/monitor/pool-performance',
            name: '存储池监控',
            component: '@/pages/monitor/pool-performance',
            permissionScope: 'prometheus',
          },
          {
            path: '/monitor/image-performance',
            name: '卷监控',
            component: '@/pages/monitor/image-performance',
            permissionScope: 'prometheus',
          },
          {
            path: '/monitor/alert',
            name: '告警',
            component: '@/pages/monitor/alert',
            permissionScope: 'prometheus',
          },
          {
            path: '/monitor/alert-rule',
            name: '告警项',
            component: '@/pages/monitor/alert-rule',
            permissionScope: 'prometheus',
          },
          {
            path: '/monitor/alert-silence',
            name: '告警静默',
            component: '@/pages/monitor/alert-silence',
            permissionScope: 'prometheus',
          },
        ],
      },
    ],
  },
];

export default routes;
