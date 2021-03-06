import React, { FC, HTMLAttributes } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';

import GavelIcon from '@material-ui/icons/Gavel';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import {
  LinkedDataIdentifier,
  JSONEditor,
  TabPanels,
} from '@material-did/common';

import { OperationAccordion } from '../OperationAccordion';
import { OperationPreviewHeader } from '../OperationPreviewHeader';
import {
  suffixDataToLongFormDID,
  fullyDecodedCreateOperation,
} from '../../core-utils';

export interface ICreateOperationProps extends HTMLAttributes<HTMLDivElement> {
  operation: any;
  didMethodPrefix: string;
}

export const CreateOperation: FC<ICreateOperationProps> = ({
  didMethodPrefix,
  operation,
}) => {
  const longFormDid = suffixDataToLongFormDID(
    didMethodPrefix,
    operation.suffix_data
  );
  const decodedCreateOperation = fullyDecodedCreateOperation(operation);
  return (
    <div>
      <OperationAccordion
        open={false}
        summary={
          <OperationPreviewHeader
            operation={operation}
            controller={
              <LinkedDataIdentifier value={longFormDid.split('?')[0]} />
            }
          />
        }
        details={
          <React.Fragment>
            <TabPanels
              tabs={[
                {
                  index: 0,
                  label: 'Preview',
                  panel: (
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <FingerprintIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <LinkedDataIdentifier
                              value={longFormDid.split('?')[0]}
                            />
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="link"
                            onClick={() => {
                              window.open(
                                'https://dev.uniresolver.io/#' +
                                  longFormDid.split('?')[0]
                              );
                            }}
                          >
                            <OpenInNewIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <GavelIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={'Long Form DID'}
                          secondary={longFormDid}
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="link"
                            onClick={() => {
                              window.open(
                                'https://dev.uniresolver.io/#' + longFormDid
                              );
                            }}
                          >
                            <OpenInNewIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  ),
                },
                {
                  index: 1,
                  label: 'Source',
                  panel: (
                    <JSONEditor
                      value={JSON.stringify(decodedCreateOperation, null, 2)}
                    />
                  ),
                },
              ]}
            />
          </React.Fragment>
        }
      />
    </div>
  );
};
