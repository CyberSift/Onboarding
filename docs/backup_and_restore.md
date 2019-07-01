## Backup and Restore procedures

**TL;DR** : For Elasticsearch backups and restores, use the [Snapshot API](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-snapshots.html), and for CyberSift-specific machine learning data, use the provided `backup_and_restore.py` script

---------

### Overview
CyberSift has three types of data that needs to be retained during backups:

- Data stored within ElasticSearch
- Data stored in regular files which describe machine learning models' weights, hyperparemeters and NiFi flow data
- Data stored in the on-server redis cache

To ensure continuity of service, all the above need to be backed up regularly.

-------

### Backup

**ElasticSearch data**

ElasticSearch provides it's own easy-to-use backup and restore system via the [**Snapshot API**](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-snapshots.html). In a nutshell:

1. Update the `path.repo` setting in the `/etc/elasticsearch/elasticsearch.yml` file. The CyberSift server comes with a path repository already configured at `/data/es_backup`. Change this to a suitable value for your environment, and restart the elasticsearch service.
2. Create a "repository" that references the above location, for example:

```
curl -X PUT "localhost:9200/_snapshot/cybersift_backup" -H 'Content-Type: application/json' -d'
{
    "type": "fs",
    "settings": {
        "location": "/data/es_backup",
        "compress": true
    }
}
'
```

3. Whenever you'd like to take a backup, instruct ElasticSearch to perform a "snapshot" in the above repository, for example:

```
# PUT /_snapshot/cybersift_backup/<snapshot-{now/d}>
curl -X PUT "localhost:9200/_snapshot/cybersift_backup/%3Csnapshot-%7Bnow%2Fd%7D%3E"
```

(this will create a snaphost similar to `snapshot-2019.06.11`)

-----------

**CyberSift data (regular files and redis)**

To backup CyberSift specific data, we provide a script that's pre-installed on the server. You can find this script at `/root/CS/src/ml_infra/scripts/backup_restore.py`. Use a cron job or similar to schedule regular backups, for example:

```
python3 /root/CS/src/ml_infra/scripts/backup_restore.py -o backup -p /tmp/backup.tar.gz
```

This will create a tarball in the /tmp directory. Change the path to a more suitable value for your environment

-----------

### Restore

**ElasticSearch data**

Similar to the backup scenario, the Snapshot API is used here. To restore a snapshot, run a command similar to:

```
curl -X POST "localhost:9200/_snapshot/cybersift_backup/snapshot_1/_restore"
```

-------

- **CyberSift data (regular files and redis)**

Similar to the backup scenario, the `backup_and_restore.py` script is used here. To restore the data, run a command similar to:

```
sudo python3 backup_restore.py -o restore -p /tmp/backup.tar.gz
```

-------