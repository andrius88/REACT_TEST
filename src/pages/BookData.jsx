function BookData() {
  const { id } = useParams();
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/donors/${id}`)
      .then(res => setDonor(res.data));
  }, [id]);

  if (!donor) return <p>Loading...</p>;

  return (
    <>
    <div className="flex  border-amber-400">
    <div className="w-2xs border-b-blue-800 border-2 p-10">
        <h1>MY STORY</h1>
        <p>{donor.myStory}</p>
    </div>
    <div className="w-2xs border-b-blue-800 border-2 p-10">
        {/* {console.log(donor.avatar)} */}
        <img src={donor.avatar} alt="Donor picture" />
    </div>
    <div className="w-2xs border-b-blue-800 border-2 p-10">
        <p>Donor id: {donor.id}</p>
        <h2>Donor first name: {donor.firstName}</h2>
        <h2>Donor last name:{donor.lastName}</h2>
        <h2>Donor age: {donor.age}</h2>
        <h2>Donor gender: {donor.gender}</h2>
        <h2>Donor blood group: {donor.bloodGroup}</h2>
      </div>
      </div>
    </>
  );
}

export default BookData;