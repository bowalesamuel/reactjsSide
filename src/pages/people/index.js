import React, { useState } from "react";
import { Table } from "antd";
import { DashboardLayout } from "../../components/layout";
import { connect } from "react-redux";
import { getPeople } from "../../redux/actions/user";
import { date } from "../../utils/helper";

function People({ transaction, fetchTrans }) {
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
      dataIndex: "name",
      // render: (createdAt) => `${date(createdAt)}`,
    },
    {
      title: "Birth Year",
      dataIndex: "birth_year",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Eye color",
      dataIndex: "eye_color",
    },
    {
      title: "Hair color",
      dataIndex: "hair_color",
    },
    {
      title: "Height",
      dataIndex: "height",
    },
    {
      title: "Mass",
      dataIndex: "mass",
      render: (createdAt) => `${createdAt} KG`,
    },
    {
      title: "Skin color",
      dataIndex: "skin_color",
    },
    {
      title: "Created",
      dataIndex: "created",
      render: (createdAt) => `${date(createdAt)}`,
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
    <DashboardLayout type={"People"}>
      
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
  transaction: state.user.people,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrans: (data) => {
    dispatch(getPeople(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(People);

