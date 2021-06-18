import React, { useState } from "react";
import { Table } from "antd";
import { DashboardLayout } from "../../components/layout";
import { connect } from "react-redux";
import { getSpecies } from "../../redux/actions/user";
import { date } from "../../utils/helper";

function Species({ transaction, fetchTrans }) {
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
      title: "Name",
      dataIndex: "created_at",
      render: (createdAt) => `${date(createdAt)}`,
    },
    {
      title: "Classification",
      dataIndex: "status",
    },
    {
      title: "Designation",
      dataIndex: "status",
    },
    {
      title: "Average Height",
      dataIndex: "status",
    },
    {
      title: "Average Lifespan",
      dataIndex: "status",
    },
    {
      title: "Eye colors",
      dataIndex: "status",
    },
    {
      title: "Hair colors",
      dataIndex: "status",
    },
    {
      title: "Language",
      dataIndex: "id",
      key: "x",
      render: (id) => <p style={{ cursor: "pointer" }}>View Details</p>,
    },
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
    <DashboardLayout type={"Species"}>
      
      <div style={{marginTop:20, marginLeft:20,marginRight:20}}>
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
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => ({
  transaction: state.user.species,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrans: (data) => {
    dispatch(getSpecies(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Species);
