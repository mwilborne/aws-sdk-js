/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

module.exports = {
  format: 'query',
  apiVersion: '2012-12-01',
  endpointPrefix: 'redshift',
  resultWrapped: true,
  serviceFullName: 'Amazon Redshift',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  operations: {
    authorizeClusterSecurityGroupIngress: {
      name: 'AuthorizeClusterSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
            required: true
          },
          CIDRIP: {
          },
          EC2SecurityGroupName: {
          },
          EC2SecurityGroupOwnerId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSecurityGroup: {
            type: 'structure',
            members: {
              ClusterSecurityGroupName: {
              },
              Description: {
              },
              EC2SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    EC2SecurityGroupName: {
                    },
                    EC2SecurityGroupOwnerId: {
                    }
                  },
                  name: 'EC2SecurityGroup'
                }
              },
              IPRanges: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    CIDRIP: {
                    }
                  },
                  name: 'IPRange'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    authorizeSnapshotAccess: {
      name: 'AuthorizeSnapshotAccess',
      input: {
        type: 'structure',
        members: {
          SnapshotIdentifier: {
            required: true
          },
          SnapshotClusterIdentifier: {
          },
          AccountWithRestoreAccess: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Snapshot: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {
              },
              ClusterVersion: {
              },
              SnapshotType: {
              },
              NodeType: {
              },
              NumberOfNodes: {
                type: 'integer'
              },
              DBName: {
              },
              VpcId: {
              },
              Encrypted: {
                type: 'boolean'
              },
              EncryptedWithHSM: {
                type: 'boolean'
              },
              AccountsWithRestoreAccess: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AccountId: {
                    }
                  },
                  name: 'AccountWithRestoreAccess'
                }
              },
              OwnerAccount: {
              },
              TotalBackupSizeInMegaBytes: {
                type: 'float'
              },
              ActualIncrementalBackupSizeInMegaBytes: {
                type: 'float'
              },
              BackupProgressInMegaBytes: {
                type: 'float'
              },
              CurrentBackupRateInMegaBytesPerSecond: {
                type: 'float'
              },
              EstimatedSecondsToCompletion: {
                type: 'integer'
              },
              ElapsedTimeInSeconds: {
                type: 'integer'
              },
              SourceRegion: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    copyClusterSnapshot: {
      name: 'CopyClusterSnapshot',
      input: {
        type: 'structure',
        members: {
          SourceSnapshotIdentifier: {
            required: true
          },
          SourceSnapshotClusterIdentifier: {
          },
          TargetSnapshotIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Snapshot: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {
              },
              ClusterVersion: {
              },
              SnapshotType: {
              },
              NodeType: {
              },
              NumberOfNodes: {
                type: 'integer'
              },
              DBName: {
              },
              VpcId: {
              },
              Encrypted: {
                type: 'boolean'
              },
              EncryptedWithHSM: {
                type: 'boolean'
              },
              AccountsWithRestoreAccess: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AccountId: {
                    }
                  },
                  name: 'AccountWithRestoreAccess'
                }
              },
              OwnerAccount: {
              },
              TotalBackupSizeInMegaBytes: {
                type: 'float'
              },
              ActualIncrementalBackupSizeInMegaBytes: {
                type: 'float'
              },
              BackupProgressInMegaBytes: {
                type: 'float'
              },
              CurrentBackupRateInMegaBytesPerSecond: {
                type: 'float'
              },
              EstimatedSecondsToCompletion: {
                type: 'integer'
              },
              ElapsedTimeInSeconds: {
                type: 'integer'
              },
              SourceRegion: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createCluster: {
      name: 'CreateCluster',
      input: {
        type: 'structure',
        members: {
          DBName: {
          },
          ClusterIdentifier: {
            required: true
          },
          ClusterType: {
          },
          NodeType: {
            required: true
          },
          MasterUsername: {
            required: true
          },
          MasterUserPassword: {
            required: true
          },
          ClusterSecurityGroups: {
            type: 'list',
            members: {
              name: 'ClusterSecurityGroupName'
            }
          },
          VpcSecurityGroupIds: {
            type: 'list',
            members: {
              name: 'VpcSecurityGroupId'
            }
          },
          ClusterSubnetGroupName: {
          },
          AvailabilityZone: {
          },
          PreferredMaintenanceWindow: {
          },
          ClusterParameterGroupName: {
          },
          AutomatedSnapshotRetentionPeriod: {
            type: 'integer'
          },
          Port: {
            type: 'integer'
          },
          ClusterVersion: {
          },
          AllowVersionUpgrade: {
            type: 'boolean'
          },
          NumberOfNodes: {
            type: 'integer'
          },
          PubliclyAccessible: {
            type: 'boolean'
          },
          Encrypted: {
            type: 'boolean'
          },
          HsmClientCertificateIdentifier: {
          },
          HsmConfigurationIdentifier: {
          },
          ElasticIp: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    createClusterParameterGroup: {
      name: 'CreateClusterParameterGroup',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          },
          ParameterGroupFamily: {
            required: true
          },
          Description: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterParameterGroup: {
            type: 'structure',
            members: {
              ParameterGroupName: {
              },
              ParameterGroupFamily: {
              },
              Description: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createClusterSecurityGroup: {
      name: 'CreateClusterSecurityGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
            required: true
          },
          Description: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSecurityGroup: {
            type: 'structure',
            members: {
              ClusterSecurityGroupName: {
              },
              Description: {
              },
              EC2SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    EC2SecurityGroupName: {
                    },
                    EC2SecurityGroupOwnerId: {
                    }
                  },
                  name: 'EC2SecurityGroup'
                }
              },
              IPRanges: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    CIDRIP: {
                    }
                  },
                  name: 'IPRange'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    createClusterSnapshot: {
      name: 'CreateClusterSnapshot',
      input: {
        type: 'structure',
        members: {
          SnapshotIdentifier: {
            required: true
          },
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Snapshot: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {
              },
              ClusterVersion: {
              },
              SnapshotType: {
              },
              NodeType: {
              },
              NumberOfNodes: {
                type: 'integer'
              },
              DBName: {
              },
              VpcId: {
              },
              Encrypted: {
                type: 'boolean'
              },
              EncryptedWithHSM: {
                type: 'boolean'
              },
              AccountsWithRestoreAccess: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AccountId: {
                    }
                  },
                  name: 'AccountWithRestoreAccess'
                }
              },
              OwnerAccount: {
              },
              TotalBackupSizeInMegaBytes: {
                type: 'float'
              },
              ActualIncrementalBackupSizeInMegaBytes: {
                type: 'float'
              },
              BackupProgressInMegaBytes: {
                type: 'float'
              },
              CurrentBackupRateInMegaBytesPerSecond: {
                type: 'float'
              },
              EstimatedSecondsToCompletion: {
                type: 'integer'
              },
              ElapsedTimeInSeconds: {
                type: 'integer'
              },
              SourceRegion: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createClusterSubnetGroup: {
      name: 'CreateClusterSubnetGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSubnetGroupName: {
            required: true
          },
          Description: {
            required: true
          },
          SubnetIds: {
            type: 'list',
            members: {
              name: 'SubnetIdentifier'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSubnetGroup: {
            type: 'structure',
            members: {
              ClusterSubnetGroupName: {
              },
              Description: {
              },
              VpcId: {
              },
              SubnetGroupStatus: {
              },
              Subnets: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {
                    },
                    SubnetAvailabilityZone: {
                      type: 'structure',
                      members: {
                        Name: {
                        }
                      },
                      wrapper: true
                    },
                    SubnetStatus: {
                    }
                  },
                  name: 'Subnet'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    createEventSubscription: {
      name: 'CreateEventSubscription',
      input: {
        type: 'structure',
        members: {
          SubscriptionName: {
            required: true
          },
          SnsTopicArn: {
            required: true
          },
          SourceType: {
          },
          SourceIds: {
            type: 'list',
            members: {
              name: 'SourceId'
            }
          },
          EventCategories: {
            type: 'list',
            members: {
              name: 'EventCategory'
            }
          },
          Severity: {
          },
          Enabled: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          EventSubscription: {
            type: 'structure',
            members: {
              CustomerAwsId: {
              },
              CustSubscriptionId: {
              },
              SnsTopicArn: {
              },
              Status: {
              },
              SubscriptionCreationTime: {
                type: 'timestamp'
              },
              SourceType: {
              },
              SourceIdsList: {
                type: 'list',
                members: {
                  name: 'SourceId'
                }
              },
              EventCategoriesList: {
                type: 'list',
                members: {
                  name: 'EventCategory'
                }
              },
              Severity: {
              },
              Enabled: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    createHsmClientCertificate: {
      name: 'CreateHsmClientCertificate',
      input: {
        type: 'structure',
        members: {
          HsmClientCertificateIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          HsmClientCertificate: {
            type: 'structure',
            members: {
              HsmClientCertificateIdentifier: {
              },
              HsmClientCertificatePublicKey: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createHsmConfiguration: {
      name: 'CreateHsmConfiguration',
      input: {
        type: 'structure',
        members: {
          HsmConfigurationIdentifier: {
            required: true
          },
          Description: {
            required: true
          },
          HsmIpAddress: {
            required: true
          },
          HsmPartitionName: {
            required: true
          },
          HsmPartitionPassword: {
            required: true
          },
          HsmServerPublicCertificate: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          HsmConfiguration: {
            type: 'structure',
            members: {
              HsmConfigurationIdentifier: {
              },
              Description: {
              },
              HsmIpAddress: {
              },
              HsmPartitionName: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteCluster: {
      name: 'DeleteCluster',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          SkipFinalClusterSnapshot: {
            type: 'boolean'
          },
          FinalClusterSnapshotIdentifier: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteClusterParameterGroup: {
      name: 'DeleteClusterParameterGroup',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteClusterSecurityGroup: {
      name: 'DeleteClusterSecurityGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteClusterSnapshot: {
      name: 'DeleteClusterSnapshot',
      input: {
        type: 'structure',
        members: {
          SnapshotIdentifier: {
            required: true
          },
          SnapshotClusterIdentifier: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Snapshot: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {
              },
              ClusterVersion: {
              },
              SnapshotType: {
              },
              NodeType: {
              },
              NumberOfNodes: {
                type: 'integer'
              },
              DBName: {
              },
              VpcId: {
              },
              Encrypted: {
                type: 'boolean'
              },
              EncryptedWithHSM: {
                type: 'boolean'
              },
              AccountsWithRestoreAccess: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AccountId: {
                    }
                  },
                  name: 'AccountWithRestoreAccess'
                }
              },
              OwnerAccount: {
              },
              TotalBackupSizeInMegaBytes: {
                type: 'float'
              },
              ActualIncrementalBackupSizeInMegaBytes: {
                type: 'float'
              },
              BackupProgressInMegaBytes: {
                type: 'float'
              },
              CurrentBackupRateInMegaBytesPerSecond: {
                type: 'float'
              },
              EstimatedSecondsToCompletion: {
                type: 'integer'
              },
              ElapsedTimeInSeconds: {
                type: 'integer'
              },
              SourceRegion: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteClusterSubnetGroup: {
      name: 'DeleteClusterSubnetGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSubnetGroupName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteEventSubscription: {
      name: 'DeleteEventSubscription',
      input: {
        type: 'structure',
        members: {
          SubscriptionName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteHsmClientCertificate: {
      name: 'DeleteHsmClientCertificate',
      input: {
        type: 'structure',
        members: {
          HsmClientCertificateIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteHsmConfiguration: {
      name: 'DeleteHsmConfiguration',
      input: {
        type: 'structure',
        members: {
          HsmConfigurationIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    describeClusterParameterGroups: {
      name: 'DescribeClusterParameterGroups',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ParameterGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterGroupName: {
                },
                ParameterGroupFamily: {
                },
                Description: {
                }
              },
              wrapper: true,
              name: 'ClusterParameterGroup'
            }
          }
        }
      }
    },
    describeClusterParameters: {
      name: 'DescribeClusterParameters',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          },
          Source: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterName: {
                },
                ParameterValue: {
                },
                Description: {
                },
                Source: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                }
              },
              name: 'Parameter'
            }
          },
          Marker: {
          }
        }
      }
    },
    describeClusterSecurityGroups: {
      name: 'DescribeClusterSecurityGroups',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ClusterSecurityGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterSecurityGroupName: {
                },
                Description: {
                },
                EC2SecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Status: {
                      },
                      EC2SecurityGroupName: {
                      },
                      EC2SecurityGroupOwnerId: {
                      }
                    },
                    name: 'EC2SecurityGroup'
                  }
                },
                IPRanges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Status: {
                      },
                      CIDRIP: {
                      }
                    },
                    name: 'IPRange'
                  }
                }
              },
              wrapper: true,
              name: 'ClusterSecurityGroup'
            }
          }
        }
      }
    },
    describeClusterSnapshots: {
      name: 'DescribeClusterSnapshots',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
          },
          SnapshotIdentifier: {
          },
          SnapshotType: {
          },
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          },
          OwnerAccount: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          Snapshots: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SnapshotIdentifier: {
                },
                ClusterIdentifier: {
                },
                SnapshotCreateTime: {
                  type: 'timestamp'
                },
                Status: {
                },
                Port: {
                  type: 'integer'
                },
                AvailabilityZone: {
                },
                ClusterCreateTime: {
                  type: 'timestamp'
                },
                MasterUsername: {
                },
                ClusterVersion: {
                },
                SnapshotType: {
                },
                NodeType: {
                },
                NumberOfNodes: {
                  type: 'integer'
                },
                DBName: {
                },
                VpcId: {
                },
                Encrypted: {
                  type: 'boolean'
                },
                EncryptedWithHSM: {
                  type: 'boolean'
                },
                AccountsWithRestoreAccess: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      AccountId: {
                      }
                    },
                    name: 'AccountWithRestoreAccess'
                  }
                },
                OwnerAccount: {
                },
                TotalBackupSizeInMegaBytes: {
                  type: 'float'
                },
                ActualIncrementalBackupSizeInMegaBytes: {
                  type: 'float'
                },
                BackupProgressInMegaBytes: {
                  type: 'float'
                },
                CurrentBackupRateInMegaBytesPerSecond: {
                  type: 'float'
                },
                EstimatedSecondsToCompletion: {
                  type: 'integer'
                },
                ElapsedTimeInSeconds: {
                  type: 'integer'
                },
                SourceRegion: {
                }
              },
              wrapper: true,
              name: 'Snapshot'
            }
          }
        }
      }
    },
    describeClusterSubnetGroups: {
      name: 'DescribeClusterSubnetGroups',
      input: {
        type: 'structure',
        members: {
          ClusterSubnetGroupName: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ClusterSubnetGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterSubnetGroupName: {
                },
                Description: {
                },
                VpcId: {
                },
                SubnetGroupStatus: {
                },
                Subnets: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      SubnetIdentifier: {
                      },
                      SubnetAvailabilityZone: {
                        type: 'structure',
                        members: {
                          Name: {
                          }
                        },
                        wrapper: true
                      },
                      SubnetStatus: {
                      }
                    },
                    name: 'Subnet'
                  }
                }
              },
              wrapper: true,
              name: 'ClusterSubnetGroup'
            }
          }
        }
      }
    },
    describeClusterVersions: {
      name: 'DescribeClusterVersions',
      input: {
        type: 'structure',
        members: {
          ClusterVersion: {
          },
          ClusterParameterGroupFamily: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ClusterVersions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterVersion: {
                },
                ClusterParameterGroupFamily: {
                },
                Description: {
                }
              },
              name: 'ClusterVersion'
            }
          }
        }
      }
    },
    describeClusters: {
      name: 'DescribeClusters',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          Clusters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterIdentifier: {
                },
                NodeType: {
                },
                ClusterStatus: {
                },
                ModifyStatus: {
                },
                MasterUsername: {
                },
                DBName: {
                },
                Endpoint: {
                  type: 'structure',
                  members: {
                    Address: {
                    },
                    Port: {
                      type: 'integer'
                    }
                  }
                },
                ClusterCreateTime: {
                  type: 'timestamp'
                },
                AutomatedSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                ClusterSecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ClusterSecurityGroupName: {
                      },
                      Status: {
                      }
                    },
                    name: 'ClusterSecurityGroup'
                  }
                },
                VpcSecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      VpcSecurityGroupId: {
                      },
                      Status: {
                      }
                    },
                    name: 'VpcSecurityGroup'
                  }
                },
                ClusterParameterGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ParameterGroupName: {
                      },
                      ParameterApplyStatus: {
                      }
                    },
                    name: 'ClusterParameterGroup'
                  }
                },
                ClusterSubnetGroupName: {
                },
                VpcId: {
                },
                AvailabilityZone: {
                },
                PreferredMaintenanceWindow: {
                },
                PendingModifiedValues: {
                  type: 'structure',
                  members: {
                    MasterUserPassword: {
                    },
                    NodeType: {
                    },
                    NumberOfNodes: {
                      type: 'integer'
                    },
                    ClusterType: {
                    },
                    ClusterVersion: {
                    },
                    AutomatedSnapshotRetentionPeriod: {
                      type: 'integer'
                    }
                  }
                },
                ClusterVersion: {
                },
                AllowVersionUpgrade: {
                  type: 'boolean'
                },
                NumberOfNodes: {
                  type: 'integer'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Encrypted: {
                  type: 'boolean'
                },
                RestoreStatus: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    CurrentRestoreRateInMegaBytesPerSecond: {
                      type: 'float'
                    },
                    SnapshotSizeInMegaBytes: {
                      type: 'integer'
                    },
                    ProgressInMegaBytes: {
                      type: 'integer'
                    },
                    ElapsedTimeInSeconds: {
                      type: 'integer'
                    },
                    EstimatedTimeToCompletionInSeconds: {
                      type: 'integer'
                    }
                  }
                },
                HsmStatus: {
                  type: 'structure',
                  members: {
                    HsmClientCertificateIdentifier: {
                    },
                    HsmConfigurationIdentifier: {
                    },
                    Status: {
                    }
                  }
                },
                ClusterSnapshotCopyStatus: {
                  type: 'structure',
                  members: {
                    DestinationRegion: {
                    },
                    RetentionPeriod: {
                      type: 'integer'
                    }
                  }
                },
                ClusterPublicKey: {
                },
                ClusterNodes: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      NodeRole: {
                      },
                      PrivateIPAddress: {
                      },
                      PublicIPAddress: {
                      }
                    }
                  }
                },
                ElasticIpStatus: {
                  type: 'structure',
                  members: {
                    ElasticIp: {
                    },
                    Status: {
                    }
                  }
                }
              },
              wrapper: true,
              name: 'Cluster'
            }
          }
        }
      }
    },
    describeDefaultClusterParameters: {
      name: 'DescribeDefaultClusterParameters',
      input: {
        type: 'structure',
        members: {
          ParameterGroupFamily: {
            required: true
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DefaultClusterParameters: {
            type: 'structure',
            members: {
              ParameterGroupFamily: {
              },
              Marker: {
              },
              Parameters: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterName: {
                    },
                    ParameterValue: {
                    },
                    Description: {
                    },
                    Source: {
                    },
                    DataType: {
                    },
                    AllowedValues: {
                    },
                    IsModifiable: {
                      type: 'boolean'
                    },
                    MinimumEngineVersion: {
                    }
                  },
                  name: 'Parameter'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeEventCategories: {
      name: 'DescribeEventCategories',
      input: {
        type: 'structure',
        members: {
          SourceType: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          EventCategoriesMapList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SourceType: {
                },
                Events: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      EventId: {
                      },
                      EventCategories: {
                        type: 'list',
                        members: {
                          name: 'EventCategory'
                        }
                      },
                      EventDescription: {
                      },
                      Severity: {
                      }
                    },
                    wrapper: true,
                    name: 'EventInfoMap'
                  }
                }
              },
              wrapper: true,
              name: 'EventCategoriesMap'
            }
          }
        }
      }
    },
    describeEventSubscriptions: {
      name: 'DescribeEventSubscriptions',
      input: {
        type: 'structure',
        members: {
          SubscriptionName: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          EventSubscriptionsList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                CustomerAwsId: {
                },
                CustSubscriptionId: {
                },
                SnsTopicArn: {
                },
                Status: {
                },
                SubscriptionCreationTime: {
                  type: 'timestamp'
                },
                SourceType: {
                },
                SourceIdsList: {
                  type: 'list',
                  members: {
                    name: 'SourceId'
                  }
                },
                EventCategoriesList: {
                  type: 'list',
                  members: {
                    name: 'EventCategory'
                  }
                },
                Severity: {
                },
                Enabled: {
                  type: 'boolean'
                }
              },
              wrapper: true,
              name: 'EventSubscription'
            }
          }
        }
      }
    },
    describeEvents: {
      name: 'DescribeEvents',
      input: {
        type: 'structure',
        members: {
          SourceIdentifier: {
          },
          SourceType: {
          },
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
          },
          Duration: {
            type: 'integer'
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          Events: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SourceIdentifier: {
                },
                SourceType: {
                },
                Message: {
                },
                EventCategories: {
                  type: 'list',
                  members: {
                    name: 'EventCategory'
                  }
                },
                Severity: {
                },
                Date: {
                  type: 'timestamp'
                },
                EventId: {
                }
              },
              name: 'Event'
            }
          }
        }
      }
    },
    describeHsmClientCertificates: {
      name: 'DescribeHsmClientCertificates',
      input: {
        type: 'structure',
        members: {
          HsmClientCertificateIdentifier: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          HsmClientCertificates: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                HsmClientCertificateIdentifier: {
                },
                HsmClientCertificatePublicKey: {
                }
              },
              wrapper: true,
              name: 'HsmClientCertificate'
            }
          }
        }
      }
    },
    describeHsmConfigurations: {
      name: 'DescribeHsmConfigurations',
      input: {
        type: 'structure',
        members: {
          HsmConfigurationIdentifier: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          HsmConfigurations: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                HsmConfigurationIdentifier: {
                },
                Description: {
                },
                HsmIpAddress: {
                },
                HsmPartitionName: {
                }
              },
              wrapper: true,
              name: 'HsmConfiguration'
            }
          }
        }
      }
    },
    describeLoggingStatus: {
      name: 'DescribeLoggingStatus',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LoggingEnabled: {
            type: 'boolean'
          },
          BucketName: {
          },
          S3KeyPrefix: {
          },
          LastSuccessfulDeliveryTime: {
            type: 'timestamp'
          },
          LastFailureTime: {
            type: 'timestamp'
          },
          LastFailureMessage: {
          }
        }
      }
    },
    describeOrderableClusterOptions: {
      name: 'DescribeOrderableClusterOptions',
      input: {
        type: 'structure',
        members: {
          ClusterVersion: {
          },
          NodeType: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          OrderableClusterOptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterVersion: {
                },
                ClusterType: {
                },
                NodeType: {
                },
                AvailabilityZones: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Name: {
                      }
                    },
                    wrapper: true,
                    name: 'AvailabilityZone'
                  }
                }
              },
              wrapper: true,
              name: 'OrderableClusterOption'
            }
          },
          Marker: {
          }
        }
      }
    },
    describeReservedNodeOfferings: {
      name: 'DescribeReservedNodeOfferings',
      input: {
        type: 'structure',
        members: {
          ReservedNodeOfferingId: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ReservedNodeOfferings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ReservedNodeOfferingId: {
                },
                NodeType: {
                },
                Duration: {
                  type: 'integer'
                },
                FixedPrice: {
                  type: 'float'
                },
                UsagePrice: {
                  type: 'float'
                },
                CurrencyCode: {
                },
                OfferingType: {
                },
                RecurringCharges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      RecurringChargeAmount: {
                        type: 'float'
                      },
                      RecurringChargeFrequency: {
                      }
                    },
                    wrapper: true,
                    name: 'RecurringCharge'
                  }
                }
              },
              wrapper: true,
              name: 'ReservedNodeOffering'
            }
          }
        }
      }
    },
    describeReservedNodes: {
      name: 'DescribeReservedNodes',
      input: {
        type: 'structure',
        members: {
          ReservedNodeId: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ReservedNodes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ReservedNodeId: {
                },
                ReservedNodeOfferingId: {
                },
                NodeType: {
                },
                StartTime: {
                  type: 'timestamp'
                },
                Duration: {
                  type: 'integer'
                },
                FixedPrice: {
                  type: 'float'
                },
                UsagePrice: {
                  type: 'float'
                },
                CurrencyCode: {
                },
                NodeCount: {
                  type: 'integer'
                },
                State: {
                },
                OfferingType: {
                },
                RecurringCharges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      RecurringChargeAmount: {
                        type: 'float'
                      },
                      RecurringChargeFrequency: {
                      }
                    },
                    wrapper: true,
                    name: 'RecurringCharge'
                  }
                }
              },
              wrapper: true,
              name: 'ReservedNode'
            }
          }
        }
      }
    },
    describeResize: {
      name: 'DescribeResize',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TargetNodeType: {
          },
          TargetNumberOfNodes: {
            type: 'integer'
          },
          TargetClusterType: {
          },
          Status: {
          },
          ImportTablesCompleted: {
            type: 'list',
            members: {
            }
          },
          ImportTablesInProgress: {
            type: 'list',
            members: {
            }
          },
          ImportTablesNotStarted: {
            type: 'list',
            members: {
            }
          }
        }
      }
    },
    disableLogging: {
      name: 'DisableLogging',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LoggingEnabled: {
            type: 'boolean'
          },
          BucketName: {
          },
          S3KeyPrefix: {
          },
          LastSuccessfulDeliveryTime: {
            type: 'timestamp'
          },
          LastFailureTime: {
            type: 'timestamp'
          },
          LastFailureMessage: {
          }
        }
      }
    },
    disableSnapshotCopy: {
      name: 'DisableSnapshotCopy',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    enableLogging: {
      name: 'EnableLogging',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          BucketName: {
            required: true
          },
          S3KeyPrefix: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LoggingEnabled: {
            type: 'boolean'
          },
          BucketName: {
          },
          S3KeyPrefix: {
          },
          LastSuccessfulDeliveryTime: {
            type: 'timestamp'
          },
          LastFailureTime: {
            type: 'timestamp'
          },
          LastFailureMessage: {
          }
        }
      }
    },
    enableSnapshotCopy: {
      name: 'EnableSnapshotCopy',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          DestinationRegion: {
            required: true
          },
          RetentionPeriod: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    modifyCluster: {
      name: 'ModifyCluster',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          ClusterType: {
          },
          NodeType: {
          },
          NumberOfNodes: {
            type: 'integer'
          },
          ClusterSecurityGroups: {
            type: 'list',
            members: {
              name: 'ClusterSecurityGroupName'
            }
          },
          VpcSecurityGroupIds: {
            type: 'list',
            members: {
              name: 'VpcSecurityGroupId'
            }
          },
          MasterUserPassword: {
          },
          ClusterParameterGroupName: {
          },
          AutomatedSnapshotRetentionPeriod: {
            type: 'integer'
          },
          PreferredMaintenanceWindow: {
          },
          ClusterVersion: {
          },
          AllowVersionUpgrade: {
            type: 'boolean'
          },
          HsmClientCertificateIdentifier: {
          },
          HsmConfigurationIdentifier: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    modifyClusterParameterGroup: {
      name: 'ModifyClusterParameterGroup',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          },
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterName: {
                },
                ParameterValue: {
                },
                Description: {
                },
                Source: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                }
              },
              name: 'Parameter'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ParameterGroupName: {
          },
          ParameterGroupStatus: {
          }
        }
      }
    },
    modifyClusterSubnetGroup: {
      name: 'ModifyClusterSubnetGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSubnetGroupName: {
            required: true
          },
          Description: {
          },
          SubnetIds: {
            type: 'list',
            members: {
              name: 'SubnetIdentifier'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSubnetGroup: {
            type: 'structure',
            members: {
              ClusterSubnetGroupName: {
              },
              Description: {
              },
              VpcId: {
              },
              SubnetGroupStatus: {
              },
              Subnets: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {
                    },
                    SubnetAvailabilityZone: {
                      type: 'structure',
                      members: {
                        Name: {
                        }
                      },
                      wrapper: true
                    },
                    SubnetStatus: {
                    }
                  },
                  name: 'Subnet'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    modifyEventSubscription: {
      name: 'ModifyEventSubscription',
      input: {
        type: 'structure',
        members: {
          SubscriptionName: {
            required: true
          },
          SnsTopicArn: {
          },
          SourceType: {
          },
          SourceIds: {
            type: 'list',
            members: {
              name: 'SourceId'
            }
          },
          EventCategories: {
            type: 'list',
            members: {
              name: 'EventCategory'
            }
          },
          Severity: {
          },
          Enabled: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          EventSubscription: {
            type: 'structure',
            members: {
              CustomerAwsId: {
              },
              CustSubscriptionId: {
              },
              SnsTopicArn: {
              },
              Status: {
              },
              SubscriptionCreationTime: {
                type: 'timestamp'
              },
              SourceType: {
              },
              SourceIdsList: {
                type: 'list',
                members: {
                  name: 'SourceId'
                }
              },
              EventCategoriesList: {
                type: 'list',
                members: {
                  name: 'EventCategory'
                }
              },
              Severity: {
              },
              Enabled: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    modifySnapshotCopyRetentionPeriod: {
      name: 'ModifySnapshotCopyRetentionPeriod',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          RetentionPeriod: {
            type: 'integer',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    purchaseReservedNodeOffering: {
      name: 'PurchaseReservedNodeOffering',
      input: {
        type: 'structure',
        members: {
          ReservedNodeOfferingId: {
            required: true
          },
          NodeCount: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ReservedNode: {
            type: 'structure',
            members: {
              ReservedNodeId: {
              },
              ReservedNodeOfferingId: {
              },
              NodeType: {
              },
              StartTime: {
                type: 'timestamp'
              },
              Duration: {
                type: 'integer'
              },
              FixedPrice: {
                type: 'float'
              },
              UsagePrice: {
                type: 'float'
              },
              CurrencyCode: {
              },
              NodeCount: {
                type: 'integer'
              },
              State: {
              },
              OfferingType: {
              },
              RecurringCharges: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    RecurringChargeAmount: {
                      type: 'float'
                    },
                    RecurringChargeFrequency: {
                    }
                  },
                  wrapper: true,
                  name: 'RecurringCharge'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    rebootCluster: {
      name: 'RebootCluster',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    resetClusterParameterGroup: {
      name: 'ResetClusterParameterGroup',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          },
          ResetAllParameters: {
            type: 'boolean'
          },
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterName: {
                },
                ParameterValue: {
                },
                Description: {
                },
                Source: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                }
              },
              name: 'Parameter'
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ParameterGroupName: {
          },
          ParameterGroupStatus: {
          }
        }
      }
    },
    restoreFromClusterSnapshot: {
      name: 'RestoreFromClusterSnapshot',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          SnapshotIdentifier: {
            required: true
          },
          SnapshotClusterIdentifier: {
          },
          Port: {
            type: 'integer'
          },
          AvailabilityZone: {
          },
          AllowVersionUpgrade: {
            type: 'boolean'
          },
          ClusterSubnetGroupName: {
          },
          PubliclyAccessible: {
            type: 'boolean'
          },
          OwnerAccount: {
          },
          HsmClientCertificateIdentifier: {
          },
          HsmConfigurationIdentifier: {
          },
          ElasticIp: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    revokeClusterSecurityGroupIngress: {
      name: 'RevokeClusterSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
            required: true
          },
          CIDRIP: {
          },
          EC2SecurityGroupName: {
          },
          EC2SecurityGroupOwnerId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSecurityGroup: {
            type: 'structure',
            members: {
              ClusterSecurityGroupName: {
              },
              Description: {
              },
              EC2SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    EC2SecurityGroupName: {
                    },
                    EC2SecurityGroupOwnerId: {
                    }
                  },
                  name: 'EC2SecurityGroup'
                }
              },
              IPRanges: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    CIDRIP: {
                    }
                  },
                  name: 'IPRange'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    revokeSnapshotAccess: {
      name: 'RevokeSnapshotAccess',
      input: {
        type: 'structure',
        members: {
          SnapshotIdentifier: {
            required: true
          },
          SnapshotClusterIdentifier: {
          },
          AccountWithRestoreAccess: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Snapshot: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {
              },
              ClusterVersion: {
              },
              SnapshotType: {
              },
              NodeType: {
              },
              NumberOfNodes: {
                type: 'integer'
              },
              DBName: {
              },
              VpcId: {
              },
              Encrypted: {
                type: 'boolean'
              },
              EncryptedWithHSM: {
                type: 'boolean'
              },
              AccountsWithRestoreAccess: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AccountId: {
                    }
                  },
                  name: 'AccountWithRestoreAccess'
                }
              },
              OwnerAccount: {
              },
              TotalBackupSizeInMegaBytes: {
                type: 'float'
              },
              ActualIncrementalBackupSizeInMegaBytes: {
                type: 'float'
              },
              BackupProgressInMegaBytes: {
                type: 'float'
              },
              CurrentBackupRateInMegaBytesPerSecond: {
                type: 'float'
              },
              EstimatedSecondsToCompletion: {
                type: 'integer'
              },
              ElapsedTimeInSeconds: {
                type: 'integer'
              },
              SourceRegion: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    rotateEncryptionKey: {
      name: 'RotateEncryptionKey',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {
                  },
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'float'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'integer'
                  },
                  ProgressInMegaBytes: {
                    type: 'integer'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'integer'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'integer'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {
                  },
                  HsmConfigurationIdentifier: {
                  },
                  Status: {
                  }
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {
                  },
                  RetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterPublicKey: {
              },
              ClusterNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NodeRole: {
                    },
                    PrivateIPAddress: {
                    },
                    PublicIPAddress: {
                    }
                  }
                }
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {
                  },
                  Status: {
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    }
  },
  pagination: {
    describeClusterParameterGroups: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'ParameterGroups'
    },
    describeClusterParameters: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'Parameters'
    },
    describeClusterSecurityGroups: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'ClusterSecurityGroups'
    },
    describeClusterSnapshots: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'Snapshots'
    },
    describeClusterSubnetGroups: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'ClusterSubnetGroups'
    },
    describeClusterVersions: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'ClusterVersions'
    },
    describeClusters: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'Clusters'
    },
    describeDefaultClusterParameters: {
      inputToken: 'Marker',
      limitKey: 'MaxRecords'
    },
    describeEvents: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'Events'
    },
    describeOrderableClusterOptions: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'OrderableClusterOptions'
    },
    describeReservedNodeOfferings: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'ReservedNodeOfferings'
    },
    describeReservedNodes: {
      inputToken: 'Marker',
      outputToken: 'Marker',
      limitKey: 'MaxRecords',
      resultKey: 'ReservedNodes'
    }
  }
};
