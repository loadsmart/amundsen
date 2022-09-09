// This file should be used to add new config variables or overwrite defaults from config-default.ts

import { AppConfigCustom } from './config-types';

const configCustom: AppConfigCustom = {
  browse: {
    curatedTags: [],
    showAllTags: true,
    showBadgesInHome: true,
  },
  analytics: {
    plugins: [],
  },
  mailClientFeatures: {
    feedbackEnabled: false,
    notificationsEnabled: false,
  },
  indexDashboards: {
    enabled: true,
  },
  indexUsers: {
    enabled: false,
  },
  indexFeatures: {
    enabled: false,
  },
  userIdLabel: 'email address',
  logoPath: '/static/images/ls-green.png',
  logoTitle: 'Loadsmart Amundsen',
  issueTracking: {
    enabled: false,
    issueDescriptionTemplate: '',
    projectSelection: {
      enabled: false,
      title: 'Issue project key (optional)',
      inputHint: '',
    },
  },
  productTour: {},
  tableLineage: {
    inAppListEnabled: true,
    inAppPageEnabled: true,
    externalEnabled: false,
    iconPath: 'PATH_TO_ICON',
    isBeta: false,
    urlGenerator: (
      database: string,
      cluster: string,
      schema: string,
      table: string
    ) =>
      `https://DEFAULT_LINEAGE_URL?schema=${schema}&cluster=${cluster}&db=${database}&table=${table}`,
  },
  columnLineage: {
    inAppListEnabled: true,
    inAppPageEnabled: true,
    urlGenerator: (
      database: string,
      cluster: string,
      schema: string,
      table: string,
      column: string
    ) =>
      `https://DEFAULT_LINEAGE_URL?schema=${schema}&cluster=${cluster}&db=${database}&table=${table}&column=${column}`,
  },
};

export default configCustom;
