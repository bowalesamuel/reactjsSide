import React, { useState } from "react";
import { Table } from "antd";
import { DashboardLayout } from "../../components/layout";
import { connect } from "react-redux";
import { getVehicles } from "../../redux/actions/user";
import { date } from "../../utils/helper";

function Vehicles({ transaction, fetchTrans }) {
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
      title: "Vehicle Name",
      dataIndex: "created_at",
      render: (createdAt) => `${date(createdAt)}`,
    },
    {
      title: "Vehicle Model",
      dataIndex: "status",
    },
    {
      title: "Vehicle Class",
      dataIndex: "status",
    },
    {
      title: "Vehicle Manufacturer",
      dataIndex: "status",
    },
    {
      title: "Vehicle length",
      dataIndex: "status",
    },
    {
      title: "Crew",
      dataIndex: "status",
    },
    {
      title: "Passengers",
      dataIndex: "status",
    },
    {
      title: "Cargo Capacity",
      dataIndex: "status",
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
    <DashboardLayout type={"Vehicles"}>
      
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
  transaction: state.user.vehicles,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrans: (data) => {
    dispatch(getVehicles(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);

