import {
  Avatar,
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Modal,
  Select,
  Stack,
  Table,
  TableData,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  useAddNewPatient,
  useGetPatientsByHospitalId,
} from "../../../Services/API/patients.service";
import { useEffect, useState } from "react";
import { useGetUserByUserID } from "../../../Services/API/user.service";

export const PatientsPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const hospitalId = "66e7e81a581bc91c85bf1786";
  const { data, isLoading } = useGetPatientsByHospitalId(hospitalId);
  const { mutate, isSuccess, data: userData } = useGetUserByUserID();
  const { mutate: addPatientMutation, isSuccess: isAddPatientSuccess } =
    useAddNewPatient();

  const [userId, setUserId] = useState("");

  const tableData: TableData = {
    head: ["Patient Name", "Reg No", "Viral Status", "Billing Type", "Actions"],
    body: data
      ? data.map((item: any, index: number) => [
          // index + 1,
          <Flex align={"center"} gap={"xs"} direction={"row"}>
            <Avatar
              name={item.userDetails.firstName}
              radius={"100%"}
              size={32}
              color="initials"
              variant="filled"
            />
            <Text fw={"600"} size="sm">
              {item.userDetails.firstName} {item.userDetails.lastName}
            </Text>
          </Flex>,
          item.regno,
          <Badge
            color={item.viralstatus === "positive" ? "green" : "red"}
            radius={"0"}
            variant="filled"
          >
            {item.viralstatus}
          </Badge>,
          item.billingtype,
          <Button size="xs" color="dark" variant="default" radius={"0"}>
            Delete
          </Button>,
        ])
      : [],
  };

  // const getTableData = () => {
  //     data ? data.map(patient => )
  // }

  useEffect(() => {
    console.log(data, isLoading);
  }, [data, isLoading]);

  return (
    <Flex
      h={"100vh"}
      p={"xl"}
      direction={"column"}
      gap={"lg"}
      flex={"1"}
    >
      <Group justify="space-between">
        <Text size={"xxl"} fw={"bold"}>
          Patients
        </Text>
        <Button radius={"0"} onClick={open}>
          Add Patient
        </Button>
      </Group>

      <Card radius={'0'} withBorder p={"lg"}>
        <Stack gap={"sm"}>
          <Text size={"sm"} c={"gray"}>
            Showing All Patients
          </Text>
          <Table
            withRowBorders={true}
            borderColor="gray.1"
            verticalSpacing={"sm"}
            data={tableData}
          />
        </Stack>
      </Card>

      <Modal
        radius={"0"}
        centered
        opened={opened}
        onClose={close}
        title={
          <Text fw={"bold"} size="lg">
            Add Patient
          </Text>
        }
      >
        {/* Modal content */}
        <Stack>
          <Group gap={"xs"} justify="space-between">
            <TextInput
              radius={"0"}
              placeholder="Enter user id here"
              flex={"1"}
              onChange={(event) => setUserId(event.target.value)}
            />
            <Button
              onClick={() => mutate(userId)}
              radius={"0"}
              variant="filled"
            >
              Verify User
            </Button>
          </Group>
          {isSuccess && (
            <Card radius={"0"} p={"sm"} withBorder>
              <Stack>
                <Group gap={"xs"}>
                  <Avatar
                    name={`${userData.firstName} ${userData.lastName}`}
                    radius={"xl"}
                    color="initials"
                    variant="filled"
                    size={"sm"}
                  />
                  <Text fw={"600"} size="sm">
                    {userData.firstName} {userData.lastName}
                  </Text>
                </Group>
                <Grid>
                  <Grid.Col span={6}>
                    <TextInput
                      radius={"0"}
                      label="First Name"
                      disabled
                      value={userData.firstName}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      radius={"0"}
                      label="Last Name"
                      disabled
                      value={userData.firstName}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <TextInput
                      radius={"0"}
                      label="Patient Registration Number"
                      placeholder="ex: MR29888"
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      radius={"0"}
                      label="Viral Status"
                      placeholder="positive or negative"
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      radius={"0"}
                      label="Billing Type"
                      placeholder="card, cash, govt"
                    />
                  </Grid.Col>
                </Grid>
                <Button
                  onClick={() => {
                    const payload = {
                      userId: userData._id,
                      hospitalId,
                      viralstatus: "positive",
                      regno: "MRN892233",
                      billingtype: "cash",
                    };
                    addPatientMutation(payload);
                  }}
                  radius={"0"}
                  size="sm"
                  variant="filled"
                >
                  Add To Patients
                </Button>
              </Stack>
            </Card>
          )}
        </Stack>
      </Modal>
    </Flex>
  );
};
