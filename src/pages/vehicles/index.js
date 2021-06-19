import React, { useState } from "react";
import { Table } from "antd";
import { DashboardLayout } from "../../components/layout";
import { connect } from "react-redux";
import { getVehicles } from "../../redux/actions/user";
// import { date } from "../../utils/helper";

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
      dataIndex: "name",
      // render: (createdAt) => `${date(createdAt)}`,
    },
    {
      title: "Vehicle Model",
      dataIndex: "model",
    },
    {
      title: "Vehicle Class",
      dataIndex: "vehicle_class",
    },
    {
      title: "Vehicle Manufacturer",
      dataIndex: "manufacturer",
    },
    {
      title: "Vehicle length",
      dataIndex: "length",
    },
    {
      title: "Crew",
      dataIndex: "crew",
    },
    {
      title: "Passengers",
      dataIndex: "passengers",
    },
    {
      title: "Cargo Capacity",
      dataIndex: "cargo_capacity",
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
          dataSource={transaction.results}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: transaction.meta && transaction.meta.count,
          }}
          loading={loading}
          onChange={handleTableChange}
          scroll={{ x: 1000 }}
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

