import React, { useState } from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import { getFilms } from "../../redux/actions/user";
import { date } from "../../utils/helper";

function Films({ transaction, fetchTrans }) {
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: transaction && transaction.meta && transaction.meta.limit,
    total: transaction && transaction.meta && transaction.meta.count,
  });
  React.useEffect(() => {
    setPagination((pagination) => ({
      current: pagination.current,
      pageSize: transaction && transaction.meta && transaction.meta.limit,
      total: transaction && transaction.meta && transaction.meta.count,
    }));
    setLoading(false);
  }, [transaction]);

  React.useEffect(() => {
    fetchTrans({ skip: 0, limit: 10 });
    // eslint-disable-next-line
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    fetch({
      pagination,
    });
  };

  const columns = [
    {
      title: "Film Title",
      dataIndex: "created_at",
      render: (createdAt) => `${date(createdAt)}`,
    },
    {
      title: "Director",
      dataIndex: "status",
    },
    {
      title: "Producer",
      dataIndex: "status",
    },
    {
      title: "Release Date",
      dataIndex: "status",
    },
    {
      title: "Episode ID",
      dataIndex: "status",
    },
    {
      title: "Characters",
      dataIndex: "status",
    },
    // {
    //   title: "Created",
    //   dataIndex: "id",
    //   key: "x",
    //   render: (id) => <p style={{ cursor: "pointer" }}>View Details</p>,
    // },
  ];

  const fetch = async (params = {}) => {
    setLoading(true);
    await fetchTrans({
      skip: (params.pagination.current - 1) * params.pagination.pageSize,
      limit: params.pagination.pageSize,
    });
    setPagination({
      ...params.pagination,
      total: transaction.meta && transaction.meta.count,
    });
  };
  return (
    <div
      type={"People"}
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:"#fff",
        fontWeight:"600",
        color: "#04014E"
      }}
    >
        Films
      <div style={{ marginTop: 20, marginLeft: 0, marginRight: 20 }}>
        <Table
          columns={columns}
          // rowKey={(record) => record.login.uuid}
          dataSource={transaction.transactions}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: transaction.meta && transaction.meta.count,
          }}
          loading={loading}
          onChange={handleTableChange}
          scroll={{ x: 1000, y: 300 }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  transaction: state.user.people,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrans: (data) => {
    dispatch(getFilms(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Films);
