<?php
namespace Zizaco\Mongolid;

class Sequence
{
    /**
     * Sequences collection name on MongoDB. Default 'mongolid_sequences'
     *
     * @var string
     */
    protected $collection;

    /**
     * MongoDbConnector Instance
     *
     * @var MongoDbConnector
     */
    protected $connection;

    /**
     * MongoDB database name
     *
     * @var string
     */
    protected $database;

    public function __construct(MongoDbConnector $connector, $database, $collection = 'mongolid_sequences')
    {
        $this->connection = $connector->getConnection();
        $this->database   = $database;
        $this->collection = $collection;
    }

    /**
     * Get next value for the sequence
     *
     * @param string $sequenceName
     *
     * @return int
     */
    public function getNextValue($sequenceName)
    {
        $sequenceValue = $this->collection()->findAndModify(
            ['_id' => $sequenceName],
            ['$inc' => ['seq' => 1]],
            null,
            [
                'new'    => true,
                'upsert' => true,
            ]
        );

        return $sequenceValue['seq'];
    }

    /**
     * Get MongoCollection Object
     *
     * @return mixed
     */
    protected function collection()
    {
        return $this->connection->{$this->database}->{$this->collection};
    }

}