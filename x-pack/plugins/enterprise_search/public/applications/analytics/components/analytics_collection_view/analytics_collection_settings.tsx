/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

import { useActions } from 'kea';

import {
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiButton,
  EuiDescriptionList,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';

import { AnalyticsCollection } from '../../../../../common/types/analytics';

import { DeleteAnalyticsCollectionLogic } from './delete_analytics_collection_logic';

interface AnalyticsCollectionSettingsProps {
  collection: AnalyticsCollection;
}

export const AnalyticsCollectionSettings: React.FC<AnalyticsCollectionSettingsProps> = ({
  collection,
}) => {
  const { deleteAnalyticsCollection } = useActions(DeleteAnalyticsCollectionLogic);

  return (
    <div className="entSearch__collectionIntegrateLayout">
      <EuiPanel hasShadow={false} color="subdued" paddingSize="xl" grow={false}>
        <EuiDescriptionList
          listItems={[
            {
              title: i18n.translate(
                'xpack.enterpriseSearch.analytics.collections.integrate.credentials.collectionName',
                {
                  defaultMessage: 'Collection name',
                }
              ),
              description: collection.name,
            },
          ]}
          type="column"
          align="center"
          titleProps={{ className: 'entSearch__collectionCredentialTitle' }}
        />
      </EuiPanel>
      <EuiSpacer size="l" />
      <EuiPanel hasShadow={false} color="danger" paddingSize="l">
        <EuiTitle size="s">
          <h4>
            {i18n.translate(
              'xpack.enterpriseSearch.analytics.collections.settings.delete.headingTitle',
              {
                defaultMessage: 'Delete this analytics collection',
              }
            )}
          </h4>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText size="s">
          <p>
            {i18n.translate(
              'xpack.enterpriseSearch.analytics.collections.settings.delete.warning',
              {
                defaultMessage: 'This action is irreversible',
              }
            )}
          </p>
        </EuiText>
        <EuiSpacer />
        <EuiButton
          fill
          type="submit"
          color="danger"
          onClick={() => {
            deleteAnalyticsCollection(collection.name);
          }}
        >
          {i18n.translate(
            'xpack.enterpriseSearch.analytics.collections.settings.delete.buttonTitle',
            {
              defaultMessage: 'Delete this collection',
            }
          )}
        </EuiButton>
      </EuiPanel>
    </div>
  );
};
