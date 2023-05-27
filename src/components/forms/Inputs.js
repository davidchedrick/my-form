export function Inputs({ handleChange, handleSubmit, name, number }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Number:
                    <input
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
